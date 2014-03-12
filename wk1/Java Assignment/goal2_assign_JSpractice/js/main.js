// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var avgNumbers = function(arr){
        var sum = 0;
            for(var i = 0, j = arr.length; i<j; i++){ // 0+ < (1-5); 0++
                console.log("Sum += arr:", sum += arr[i]); //0+1 = 1, 1+2 = 3, 3+3=6, 6+4=10, 10+5=15
            };
        return sum / arr.length;
    };
    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

   //--------------------------------------------------------
    console.log("2. concat first and last name");

        var fullName = function(firstname, lastname){
            console.log(firstname.concat(lastname));
        };
    fullName('James', ' Bond');

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function"

        function wordCount(ipsum){
            return ipsum.split(" ").length; // split separates the string wherever there a space
            //index 0 = " "
            // index 1 = this
            // index 2 = is
            // index 3 = test
            // index 4 = text
            // index 5 = that
            // index 6 = is
            // index 7 = being
            // index 8 = used
            // index 9 = as
            // index 10 = input
            // index 11 = to
            // index 12 = a
            // index 13 = function
        };
    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");


        function charCount(ipsum){
            return ipsum.length;
        };

    console.log(charCount(ipsum));

   //--------------------------------------------------------
    console.log("5. how many vowels in a word");

        function vowelsInWord(js){
            var vowels =  ['a', 'e', 'i', 'o', 'u'];

            for( var i = 0; i < js.length; i++){
                    if (vowels.indexOf(js.substr(i, 1).toLowerCase())!=-1){ //
                        console.log('my vowels are', js.substr(i,1));
                };
            };
        };
    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
   console.log("6. find number and create an array of even or odd numbers");

    function findNum(arrOfNum, boolean){
        if(arrOfNum%2==0){
            return "even"
        }else{
            return "odd"
        };
    };

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));


})();