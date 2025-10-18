export interface Shift {
  id: number | string;
  hospital: string;
  specialty: string;
  location: string;
  date: string;
  period: string;
  value: string | number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  urgent?: boolean;
}

export interface FinancialRecord {
  id: number | string;
  hospital: string;
  date: string;
  value: number;
  status: 'recebido' | 'pendente';
  paymentDate: string;
}

export interface UserProfile {
  id: string;
  full_name: string;
  email: string;
  crm?: string;
  specialty?: string;
  phone?: string;
  address?: string;
  verification_status: 'pending' | 'verified' | 'rejected';
  professional_type: 'doctor' | 'nurse' | 'other';
}

export interface PremiumFeature {
  icon: React.ComponentType;
  title: string;
  description: string;
  items: string[];
  badge?: string;
}

