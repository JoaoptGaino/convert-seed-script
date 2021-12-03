interface Municipios {
  nome: string;
  latitude: string;
  longitude: string;
  Estado: {
    connect: { sigla: string };
  };
}
