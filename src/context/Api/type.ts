export interface ApiContextType {
  apiUrl: string;
  // Quando true, operações PUT serão desviadas localmente e NÃO tocarão o backend.
  // Use esta flag para desativar temporariamente updates que alteram o status no servidor.
  disablePut?: boolean;
}
