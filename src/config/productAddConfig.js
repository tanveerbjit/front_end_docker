export const fields = {
  name: {
    vendor: "generel",
    name: "name",
    type: "text",
    placeholder: "Name",
    rules: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Minimum length must be 3",
      },
      maxLength: {
        value: 100,
        message: "Maximum length must be 100",
      },
    },
  },
  description: {
    vendor: "generel",
    name: "description",
    type: "text",
    placeholder: "Description",
    rules: {
      required: "Description is required",
      minLength: {
        value: 3,
        message: "Minimum length must be 3",
      },
      maxLength: {
        value: 500,
        message: "Maximum length must be 500",
      },
    },
  },
  price: {
    vendor: "generel",
    name: "price",
    type: "number",
    placeholder: "Price",
    rules: {
      required: "Price is required",
      min: {
        value: 1,
        message: "price can not be less than 1",
      },
      max: {
        value: 10000,
        message: "price can not be more than 10000",
      },
    },
  },
  stock: {
    vendor: "generel",
    name: "stock",
    type: "number",
    placeholder: "Stock",
    rules: {
      required: "Stock is required",
      min: {
        value: 1,
        message: "Minimum value must be 1",
      },
      max: {
        value: 2000,
        message: "Maximum value must be 2000",
      },
    },
  },
  edition: {
    vendor: "generel",
    name: "edition",
    type: "number",
    placeholder: "Edition",
    rules: {
      required: "Edition is required",
      min: {
        value: 1,
        message: "Minimum value must be 1",
      },
      max: {
        value: 200,
        message: "Maximum value must be 200",
      },
    },
  },
  number_of_pages: {
    vendor: "generel",
    name: "number_of_pages",
    type: "number",
    placeholder: "Number of Pages",
    rules: {
      required: "Number of pages is required",
      min: {
        value: 1,
        message: "Minimum pages must be 1",
      },
      max: {
        value: 100000,
        message: "Maximum page must be 100000",
      },
    },
  },
};
