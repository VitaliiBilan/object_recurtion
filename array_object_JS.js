var obj = {
    test1: 5,
    test2: {
        test3: 'Test',
        test4: false,
        test5: [
            {
                test6: 'test'
            },
            {
                test7: 10
            }
        ]
    },
    test8: {
        test9: {
            test10: [1, 2, 3]
        }
    }
}

var newObj = deepCopy(obj);

console.log("deepCopy function", deepCopy(obj));

console.log("Equal function", isEqual(obj, newObj));

function isEqual(value1, value2) {
    if (value1 === value2) {
      return true;
    }
    else if ((typeof value1 == "object" && value1 != null) && (typeof value2 == "object" && value2 != null)) {
      if (Object.keys(value1).length != Object.keys(value2).length)
        return false;
  
      for (var prop in value1) {
        if (value2.hasOwnProperty(prop))
        {  
          if (! isEqual(value1[prop], value2[prop]))
            return false;
        }
        else
          return false;
      }
  
      return true;
    }
    else 
      return false;
  }

  
  function deepCopy(item) {
    if (!item) { return item; }

    var types = [ Number, String, Boolean ], 
        result;

    types.forEach(function(type) {
        if (item instanceof type) {
            result = type( item );
        }
    });

    if (typeof result == "undefined") {
        if (Object.prototype.toString.call( item ) === "[object Array]") {
            result = [];
            item.forEach(function(child, index, array) { 
                result[index] = deepCopy( child );
            });
        } else if (typeof item == "object") {
            if (item.nodeType && typeof item.cloneNode == "function") {
                var result = item.cloneNode( true );    
            } else if (!item.prototype) {
                if (item instanceof Date) {
                    result = new Date(item);
                } else {
                    result = {};
                    for (var i in item) {
                        result[i] = deepCopy( item[i] );
                    }
                }
            } else {
                if (false && item.constructor) {
                    result = new item.constructor();
                } else {
                    result = item;
                }
            }
        } else {
            result = item;
        }
    }

    return result;
}