const block = (children) => {
  return `<div class="block">${children}</div>`;
};

const mapping = (input, value) => {
  return `const [${value}, set${value}] = usestate();
    useEffect(() => {
      setValue(${input});
    }, [${input}]);`;
};

const useState = (value) => {
  return `const [${value}, set${value}] = usestate();`;
};
