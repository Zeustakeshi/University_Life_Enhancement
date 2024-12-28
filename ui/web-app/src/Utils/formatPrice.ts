export const formatPrice = (price: number): string => {
    // Sử dụng Intl.NumberFormat để định dạng số
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0, 
    }).format(price);
  };
  