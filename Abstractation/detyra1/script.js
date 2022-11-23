function Person(){
    this.name = 'Filan'
    if(this.constructor === Person){
        throw new Error('........')
    }
}
Person.prototype.info = function(){
    return 'Person name is'
}