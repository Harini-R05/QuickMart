export const convertToIndianRupees = (amountInDollars) => {
    // Assuming a simple conversion rate of 1 USD to 75 INR
    const conversionRate = 75;
    const amountInRupees = amountInDollars * conversionRate;
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amountInRupees);
  };