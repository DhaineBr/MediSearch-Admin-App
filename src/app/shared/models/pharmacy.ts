export interface Pharmacy {
  name: string;
  address: string;
  coords: string;
  storeHours: string;
  contactNumber: string;
  id: number;
  isSelected?: boolean;
  user: {
    id: number,
    accountNo: string,
    name: string,
    userType: string,
    accountVerified: boolean,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
}
};
