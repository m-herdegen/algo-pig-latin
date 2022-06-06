exports.translate = function(word) {
    const vowels = 'AEIOUaeiou'
    let ansString = ''
    const workingArray = word.split(' ')
    const added = 'ay'

    for (i = 0; i < workingArray.length; i++){
        if (workingArray[i].slice(0,2) == 'qu'){
            ansString += workingArray[i].slice(2,)
            ansString += workingArray[i].slice(0,2)
            ansString += added
        }
        else if (vowels.includes(workingArray[i][0])){
            ansString += workingArray[i]
            ansString += added
        }
        else if (vowels.includes(workingArray[i][1])){
            ansString += workingArray[i].slice(1,)
            ansString += workingArray[i][0]
            ansString += added
        }
        else if (vowels.includes(workingArray[i][2])){
            if (workingArray[i].slice(1,3) == 'qu'){
                ansString += workingArray[i].slice(3,)
                ansString += workingArray[i].slice(0, 3)
                ansString += added
            }
            else {
                ansString += workingArray[i].slice(2,)
                ansString += workingArray[i].slice(0,2)
                ansString += added
            }
        }
        else if (vowels.includes(workingArray[i][3])){
            ansString += workingArray[i].slice(3,)
            ansString += workingArray[i].slice(0,3)
            ansString += added
        }
        
        if (i < workingArray.length -1){
            ansString += ' '
        }
    }   

    console.log(ansString)
    return ansString
};
