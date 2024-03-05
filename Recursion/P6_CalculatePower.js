function pow(num,power){
    if(power === 0) return 1;
    return num*pow(num,(power-1));
}

pow(2,5);