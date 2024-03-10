const assert = require("assert");

const SortController = require("../controllers/sortController");
const sortController = new SortController();

const SumController = require("../controllers/sumController");
const sumController = new SumController();

describe("sortNumbers endpoint", () => {
  it("should return sorted numbers when given an array of 10 different numbers between 0 and 100", () => {
    const req = {
      body: {
        input: [5, 23, 1, 10, 45, 78, 34, 12, 90, 67],
      },
    };
    const res = {
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.body = data;
      },
    };

    sortController.sortNumbers(req, res);

    assert.strictEqual(res.statusCode, 200);
    assert.deepStrictEqual(
      res.body.sortedNumbers,
      [1, 5, 10, 12, 23, 34, 45, 67, 78, 90]
    );
  });

  it("should return error when input is not an array", () => {
    const req = {
      body: {
        input: {},
      },
    };
    const res = {
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.body = data;
      },
    };

    sortController.sortNumbers(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(
      res.body.message,
      "Please make sure the input is an array."
    );
  });

  it("should return error when input is null", () => {
    const req = {
      body: {
        input: null,
      },
    };
    const res = {
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.body = data;
      },
    };

    sortController.sortNumbers(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(
      res.body.message,
      "Please make sure the input is an array."
    );
  });

  it("should return error when input is undefined", () => {
    const req = {
      body: {
        input: undefined,
      },
    };
    const res = {
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.body = data;
      },
    };

    sortController.sortNumbers(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(
      res.body.message,
      "Please make sure the input is an array."
    );
  });

  it("should return error when given an array which consists of element which is not a number", () => {
    const req = {
      body: {
        input: ["5", 23, 1, 10, 45, 78, 34, 12, 90, 67],
      },
    };
    const res = {
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.body = data;
      },
    };

    sortController.sortNumbers(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(
      res.body.message,
      "Please make sure the array consists of only numbers."
    );
  });

  it("should return error when given an array which consists of more than 10 numbers", () => {
    const req = {
      body: {
        input: [2, 5, 23, 1, 10, 45, 78, 34, 12, 90, 67],
      },
    };
    const res = {
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.body = data;
      },
    };

    sortController.sortNumbers(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(
      res.body.message,
      "Please make sure the array has 10 numbers."
    );
  });

  it("should return error when given an array which consists of less than 10 numbers", () => {
    const req = {
      body: {
        input: [23, 1, 10, 45, 78, 34, 12, 90, 67],
      },
    };
    const res = {
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.body = data;
      },
    };

    sortController.sortNumbers(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(
      res.body.message,
      "Please make sure the array has 10 numbers."
    );
  });

  it("should return error when given an array which consists of duplicate numbers", () => {
    const req = {
      body: {
        input: [5, 5, 1, 10, 45, 78, 34, 12, 90, 67],
      },
    };
    const res = {
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.body = data;
      },
    };

    sortController.sortNumbers(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(
      res.body.message,
      "Please make sure each of the 10 numbers in array is different."
    );
  });

  it("should return error when given an array which consists of out-of-range numbers", () => {
    const req = {
      body: {
        input: [5, 0, 1, 10, 45, 78, 34, 12, 90, 67],
      },
    };
    const res = {
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.body = data;
      },
    };

    sortController.sortNumbers(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(
      res.body.message,
      "Please make sure each of the 10 numbers in array is between 0 and 100."
    );
  });
});

describe("sumNumbers endpoint", () => {
  it("should return sum of numbers from a to b when given 2 numbers between 0 and 100", () => {
    const req = {
      body: {
        a: 1,
        b: 99,
      },
    };
    const res = {
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.body = data;
      },
    };

    sumController.sumNumbers(req, res);

    assert.strictEqual(res.statusCode, 200);
    assert.strictEqual(res.body.sumNumbers, 4950);
  });

  it("should return error when given 2 same numbers", () => {
    const req = {
      body: {
        a: 1,
        b: 1,
      },
    };
    const res = {
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.body = data;
      },
    };

    sumController.sumNumbers(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(
      res.body.message,
      "Please make sure the 2 numbers are different."
    );
  });

  it("should return error when the second number is smaller than the first number", () => {
    const req = {
      body: {
        a: 10,
        b: 1,
      },
    };
    const res = {
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.body = data;
      },
    };

    sumController.sumNumbers(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(
      res.body.message,
      "Please make sure the second number is greater than the first number."
    );
  });

   it("should return error when the number is out-of-range", () => {
     const req = {
       body: {
         a: 0,
         b: 100,
       },
     };
     const res = {
       status: function (code) {
         this.statusCode = code;
         return this;
       },
       json: function (data) {
         this.body = data;
       },
     };

     sumController.sumNumbers(req, res);

     assert.strictEqual(res.statusCode, 400);
     assert.strictEqual(
       res.body.message,
       "Please make sure each number is between 0 and 100."
     );
   });
});
