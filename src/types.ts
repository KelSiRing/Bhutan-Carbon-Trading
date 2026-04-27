export enum UserRole {
  INDUSTRY = "industry",
  ADMIN = "admin",
  INVESTOR = "investor",
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  industryType?: string;
  carbonCredits: number;
  totalEmissions: number;
  joinedAt: string;
}

export interface SensorData {
  id: string;
  deviceId: string;
  industryId: string;
  mq2: number;
  mq3: number;
  timestamp: string;
}

export interface CarbonCreditTransaction {
  id: string;
  fromId: string;
  toId: string;
  amount: number;
  pricePerCredit: number;
  totalPrice: number;
  type: 'buy' | 'sell';
  status: 'pending' | 'completed' | 'cancelled';
  timestamp: string;
}

export interface InvestmentProject {
  id: string;
  title: string;
  description: string;
  type: 'solar' | 'wind' | 'hydro';
  targetAmount: number;
  currentAmount: number;
  roi: number;
  location: string;
  image: string;
}
