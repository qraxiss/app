export interface TransactionDetail {
  subtotalAmount: number;
  totalAmount: number;
  currency: string;
  transactionHash: string;
  paymentMethod: string;
  shippingCost: number;
}

export interface ItemPurchased {
  itemId: string;
  name: string;
  category: string;
  quantity: number;
  pricePerUnit: number;
  totalPrice: number;
}

export interface AdditionalInformation {
  discountApplied: number;
  promoCodeUsed: string;
  loyaltyPointsEarned: number;
  specialNotes: string;
}

export interface Order {
  orderId: string;
  orderDate: string;
  transactionDetail: TransactionDetail;
  itemsPurchased: ItemPurchased[];
  additionalInformation: AdditionalInformation;
  shopcekDomainNFT: string;
  signature: string;
}
