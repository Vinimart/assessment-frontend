"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Products = /*#__PURE__*/function () {
  function Products() {
    _classCallCheck(this, Products);

    this.items = {};
    this.mainContainer = document.getElementById("productContainer");
    this.breadTitle = document.getElementById("breadTitle");
    this.productsTitle = document.getElementById("productsTitle");
  }

  _createClass(Products, [{
    key: "fetchCategoriesLis",
    value: function () {
      var _fetchCategoriesLis = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(list) {
        var response, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.mainContainer.innerHTML = "";
                _context.next = 3;
                return fetch("http://localhost:8888/api/V1/categories/".concat(list));

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                data = _context.sent;
                this.items = data;
                this.propsToProductsItem();
                this.breadTitleFind(list);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchCategoriesLis(_x) {
        return _fetchCategoriesLis.apply(this, arguments);
      }

      return fetchCategoriesLis;
    }()
  }, {
    key: "propsToProductsItem",
    value: function propsToProductsItem() {
      var items = this.items.items;

      for (var i = 0; i < items.length; i++) {
        var specialPrice = items[i].specialPrice;
        var price = items[i].price;

        if (!specialPrice) {
          specialPrice = price.toFixed(2);
          specialPrice = "R$" + specialPrice;
          price = "";
        } else {
          specialPrice = "R$" + specialPrice.toFixed(2);
          price = "R$" + price;
        }

        var template = "\n                            <div class=\"products-item\">\n                                <div class=\"products-item-img\"><img src=\"".concat(items[i].image, "\" alt=\"").concat(items[i].path, "\" /></div>\n                                <div class=\"products-item-title\"><h2>").concat(items[i].name, "</h2></div>\n                                <div class=\"products-item-price\"><span class=\"products-old-price\">").concat(price.replace(".", ","), "</span> <span class=\"products-new-price\">").concat(specialPrice.replace(".", ","), "</span></div>\n                                <button type=\"button\">Comprar</button>\n                            </div>\n                    ");
        this.mainContainer.insertAdjacentHTML("afterbegin", template);
      }
    }
  }, {
    key: "breadTitleFind",
    value: function breadTitleFind(list) {
      if (list === 1) {
        this.breadTitle.textContent = "Camisetas";
        this.productsTitle.textContent = "Camisetas";
      } else if (list === 2) {
        this.breadTitle.textContent = "Calças";
        this.productsTitle.textContent = "Calças";
      } else if (list === 3) {
        this.breadTitle.textContent = "Sapatos";
        this.productsTitle.textContent = "Sapatos";
      }
    }
  }]);

  return Products;
}();