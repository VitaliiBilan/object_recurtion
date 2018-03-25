"Написати дві функції"
"Копіювання об’єкту"
"Визначення еквівалентності"

"Реалізовувати через рекурсію"


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

obj !== newObj  //false

isEqual(obj, newObj) //true