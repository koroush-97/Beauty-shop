export const getOrderStatusLabel = (status: string) => {
  const labels: Record<string, string> = {
    processing: "در حال پردازش",
    shipped: "ارسال شده",
    delivered: "تحویل شده",
    cancelled: "لغو شده",
    returned: "مرجوع شده",
  };
  return labels[status] || status;
};

export const getPaymentStatusLabel = (status: string) => {
  const labels: Record<string, string> = {
    pending: "در انتظار پرداخت",
    paid: "پرداخت شده",
    failed: "پرداخت ناموفق",
  };
  return labels[status] || status;
};
