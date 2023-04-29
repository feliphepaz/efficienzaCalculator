export interface PaymentsProps {
  monthsOfPayment: number;
  comissionRate: number;
  taxes: number;
  taxRate: number;
  paymentWithTax: number;
  nonPayment: number;
  lost: number;
  liquid: number;
}

export interface SalaryProps {
  supervisor: {
    numberOfSupervisors: number;
    supervisorSalary: number;
    supervisorComission: number;
    supervisorLiquidSalary: number;
    supervisorLiquidComission: number;
  };
  seller: {
    numberOfSellers: number;
    sellerSalary: number;
    sellerComission: number;
    sellerLiquidSalary: number;
    sellerLiquidComission: number;
  };
  sales: number;
  average: number;
  invoicing: number;
  benefits: {
    numberOfDays: number;
    VT: {
      VTValue: number;
      totalVT: number;
    };
    VR: {
      VRValue: number;
      totalVR: number;
    };
  };
  charges: number;
}

export interface TotalsProps {
  supervisorTotalSalary: number;
  sellerTotalSalary: number;
  supAndSelTotalSalary: number;
  laborBenefits: number;
  salaryAndCharges: number;
  totalVTAndVR: number;
  media: number;
  accountant: number;
  telephone: number;
  total: number;
}
