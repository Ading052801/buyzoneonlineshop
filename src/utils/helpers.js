export const formatPrice = (price) => {
    const exchangeRate = 50; // Conversion rate: 1 USD = 50 PHP
    const priceInPHP = price * exchangeRate;

    return new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: "PHP",
    }).format(priceInPHP);
}
