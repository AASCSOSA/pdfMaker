// src/pdf_factory/dtos/order-form.dto.ts
export class OrderFormProductDto {
  description: string;
  unitPrice: number;
  quantity: number;
  subtotal: number;
  iva: number;
  total: number;
}

export class OrderFormDto {
  id: string;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  products: OrderFormProductDto[];
}