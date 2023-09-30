const styledAddress = (address) => {
    return address.slice(0, 10) + "..." + address.slice(-5);
};

export { styledAddress };
