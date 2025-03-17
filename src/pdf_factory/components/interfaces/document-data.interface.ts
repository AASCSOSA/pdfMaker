export interface Product {
  description: string;
  unitPrice: number;
  quantity: number;
  subtotal: number;
  iva: number;
  total: number;
}

export interface OrderFormData {
  id: string;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  products: Product[];
}

export interface DeliveryReportData {
  id: string;
  deliveryDate: string;
  deliveryEmployee: string;
  ventaTotalDesglosadaConceptos: Array<{
    concepto: string;
    cantidad: number;
    venta: number;
  }>;
  // Otros campos...
}