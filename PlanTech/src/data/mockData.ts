import { Shift, FinancialRecord } from "@/types";

export const mockShifts: Shift[] = [
  {
    id: 1,
    hospital: "Hospital São Lucas",
    specialty: "Clínico Geral",
    location: "Zona Sul, São Paulo",
    date: "15 Jan 2025",
    period: "Noturno (18h - 6h)",
    value: "R$ 1.800",
    status: "confirmed",
    urgent: true,
  },
  {
    id: 2,
    hospital: "Clínica Santa Maria",
    specialty: "Pediatria",
    location: "Centro, São Paulo",
    date: "16 Jan 2025",
    period: "Diurno (8h - 18h)",
    value: "R$ 1.500",
    status: "confirmed",
    urgent: false,
  },
  {
    id: 3,
    hospital: "Hospital Albert Einstein",
    specialty: "UTI",
    location: "Morumbi, São Paulo",
    date: "17 Jan 2025",
    period: "Noturno (18h - 6h)",
    value: "R$ 2.200",
    status: "confirmed",
    urgent: true,
  },
  {
    id: 4,
    hospital: "Hospital São Camilo",
    specialty: "Clínico Geral",
    location: "Pinheiros, São Paulo",
    date: "18 Jan 2025",
    period: "Diurno (7h - 19h)",
    value: "R$ 1.900",
    status: "pending",
    urgent: false,
  },
];

export const mockFeaturedShifts = [
  {
    id: 101,
    hospital: "Hospital Sírio-Libanês",
    specialty: "UTI",
    location: "Bela Vista, São Paulo",
    date: "Hoje",
    period: "Noturno (18h - 6h)",
    value: "R$ 3.500",
    status: "available",
    urgent: true,
    featured: true,
    bonus: "+R$ 500 bônus urgência",
    timeLeft: "2h restantes",
    description: "Plantão de última hora com bônus especial"
  },
  {
    id: 102,
    hospital: "Hospital das Clínicas",
    specialty: "Emergência",
    location: "Cerqueira César, São Paulo",
    date: "Amanhã",
    period: "Diurno (6h - 18h)",
    value: "R$ 2.800",
    status: "available",
    urgent: true,
    featured: true,
    bonus: "+R$ 300 bônus especialidade",
    timeLeft: "8h restantes",
    description: "Vaga de emergência com pagamento premium"
  },
  {
    id: 103,
    hospital: "Hospital Israelita Albert Einstein",
    specialty: "Cardiologia",
    location: "Morumbi, São Paulo",
    date: "Hoje",
    period: "Noturno (20h - 8h)",
    value: "R$ 4.200",
    status: "available",
    urgent: true,
    featured: true,
    bonus: "+R$ 800 bônus urgência",
    timeLeft: "4h restantes",
    description: "Plantão de cardiologia com valor excepcional"
  },
  {
    id: 104,
    hospital: "Hospital São Paulo",
    specialty: "Neurocirurgia",
    location: "Vila Clementino, São Paulo",
    date: "Amanhã",
    period: "Noturno (18h - 6h)",
    value: "R$ 5.000",
    status: "available",
    urgent: true,
    featured: true,
    bonus: "+R$ 1.000 bônus especialidade",
    timeLeft: "12h restantes",
    description: "Oportunidade rara em neurocirurgia"
  },
  {
    id: 105,
    hospital: "Hospital Beneficência Portuguesa",
    specialty: "UTI Pediátrica",
    location: "Liberdade, São Paulo",
    date: "Hoje",
    period: "Diurno (8h - 20h)",
    value: "R$ 3.200",
    status: "available",
    urgent: true,
    featured: true,
    bonus: "+R$ 400 bônus urgência",
    timeLeft: "1h restante",
    description: "Plantão pediátrico com bônus de urgência"
  }
];

export const mockSchedule: Array<{
  id: number;
  date: string;
  day: string;
  hospital: string;
  period: string;
  location: string;
  status: string;
  value: string;
}> = [
  {
    id: 1,
    date: "15 Jan",
    day: "Seg",
    hospital: "Hospital São Lucas",
    period: "18h - 6h",
    location: "Zona Sul, SP",
    status: "confirmado",
    value: "R$ 1.800",
  },
  {
    id: 2,
    date: "18 Jan",
    day: "Qui",
    hospital: "Clínica Santa Maria",
    period: "8h - 18h",
    location: "Centro, SP",
    status: "confirmado",
    value: "R$ 1.500",
  },
  {
    id: 3,
    date: "20 Jan",
    day: "Sáb",
    hospital: "Hospital Albert Einstein",
    period: "18h - 6h",
    location: "Morumbi, SP",
    status: "pendente",
    value: "R$ 2.200",
  },
];

export const mockFinancials: FinancialRecord[] = [
  {
    id: 1,
    hospital: "Hospital São Lucas",
    date: "15 Jan 2025",
    value: 1800,
    status: "recebido",
    paymentDate: "20 Jan 2025",
  },
  {
    id: 2,
    hospital: "Clínica Santa Maria",
    date: "10 Jan 2025",
    value: 1500,
    status: "recebido",
    paymentDate: "15 Jan 2025",
  },
  {
    id: 3,
    hospital: "Hospital Albert Einstein",
    date: "18 Jan 2025",
    value: 2200,
    status: "pendente",
    paymentDate: "25 Jan 2025",
  },
  {
    id: 4,
    hospital: "Hospital São Camilo",
    date: "20 Jan 2025",
    value: 1900,
    status: "pendente",
    paymentDate: "28 Jan 2025",
  },
];

export const calculateFinancialSummary = (records: FinancialRecord[]) => {
  const totalReceived = records
    .filter((r) => r.status === "recebido")
    .reduce((acc, r) => acc + r.value, 0);
  
  const totalPending = records
    .filter((r) => r.status === "pendente")
    .reduce((acc, r) => acc + r.value, 0);
  
  const totalMonth = totalReceived + totalPending;
  const receivedPercentage = totalMonth > 0 ? (totalReceived / totalMonth) * 100 : 0;

  return {
    totalReceived,
    totalPending,
    totalMonth,
    receivedPercentage,
  };
};

