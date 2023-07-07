import * as fs from 'fs';

class Municipio {
  private _uf: string;
  private _nomeDoMunicipio: string;
  private _populacao: number;

  constructor(uf: string, nomeDoMunicipio: string, populacao: number) {
    this._uf = uf.toUpperCase();
    this._nomeDoMunicipio = nomeDoMunicipio.toUpperCase();
    this._populacao = populacao;
  }

  get uf(): string {
    return this._uf;
  }

  get nomeDoMunicipio(): string {
    return this._nomeDoMunicipio;
  }

  get populacao(): number {
    return this._populacao;
  }
}

class MunicipioFactory {
  private _nomeArquivo: string;

  constructor(nomeArquivo: string) {
    this._nomeArquivo = nomeArquivo;
  }

  get municipios(): Municipio[] {
    const municipios: Municipio[] = [];

    try {
      const data = fs.readFileSync(this._nomeArquivo, 'utf-8');
      const linhas = data.split('\n').slice(1);

      linhas.forEach((linha) => {
        const campos = linha.split(',');

        if (campos.length === 5) {
          const uf = campos[0].trim();
          const nomeDoMunicipio = campos[3].trim();
          const populacao = parseInt(campos[4].trim());

          if (!isNaN(populacao)) {
            const municipio = new Municipio(uf, nomeDoMunicipio, populacao);
            municipios.push(municipio);
          }
        }
      });
    } catch (error) {
      console.error('Erro ao ler o arquivo:', error);
    }

    return municipios;
  }
}

const municipioFactory = new MunicipioFactory('ibge-municipios.csv');
const municipios = municipioFactory.municipios;

function calcularPopulacaoTotal(municipios: Municipio[]): number {
  return municipios.reduce((total, municipio) => total + municipio.populacao, 0);
}

function calcularPopulacaoEstado(municipios: Municipio[], uf: string, nomeMunicipio?: string): number {
  const populacaoEstado = municipios
    .filter((municipio) => municipio.uf === uf.toUpperCase() && (!nomeMunicipio || municipio.nomeDoMunicipio === nomeMunicipio.toUpperCase()))
    .reduce((total, municipio) => total + municipio.populacao, 0);

  return populacaoEstado;
}

function calcularPercentualPopulacaoEstadoBrasil(municipios: Municipio[], uf: string): number {
  const populacaoEstado = calcularPopulacaoEstado(municipios, uf);
  const populacaoTotalBrasil = calcularPopulacaoTotal(municipios);

  return (populacaoEstado / populacaoTotalBrasil) * 100;
}

const populacaoTotalBrasil = calcularPopulacaoTotal(municipios);
const populacaoTotalMG = calcularPopulacaoEstado(municipios, 'MG');
const populacaoTotalBH = calcularPopulacaoEstado(municipios, 'MG', 'BELO HORIZONTE');
const percentualPopulacaoMGBrasil = calcularPercentualPopulacaoEstadoBrasil(municipios, 'MG');

console.log(`População total do Brasil é ${populacaoTotalBrasil}`);
console.log(`População total de Minas Gerais é ${populacaoTotalMG}`);
console.log(`População total de Belo Horizonte é ${populacaoTotalBH}`);
console.log(`Percentual da população de Minas Gerais em relação à população do Brasil é ${percentualPopulacaoMGBrasil.toFixed(2)}%`);
