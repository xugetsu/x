export const f1 = (a0, b0) => {
    let a = a0.split('').sort();
    let b = b0.split('').sort();
    let n = 0;
    while(a.length && b.length){
        if(a[0] === b[0]){
            a = a.slice(1);
            b = b.slice(1);
        }else if( a[0] > b[0] ){
            b = b.slice(1);
            n++;
        }else if( a[0] < b[0] ){
            a = a.slice(1);
            n++;
        }
    }
    return n + a.length + b.length ;
};

export const f2 = (a, b) => b.map( el2 => a.filter( el1 => el1 === el2).length );

export const f3 = (a0) => {
    if(a0 === ''){
		return 0;
    }
    const s ='abcdefghijklmnopqrstuvwxyz_-0123456789';
    const a = a0.toLowerCase().split('.');
    for(el of a){
        for (c of el){
            if(!(s.includes(c))){
                return 0;
            }
        }
    }
    return a.length;
};


export const f4 = (function() {
    const state = {
        cbIsCalled : false,
        callOccurrence: 0,
		firstCall: true,
    };

    return (cb) => { 
		if(!state.cbIsCalled){
            const wait = new Promise( (resolve, reject) =>  setTimeout( () => resolve() , 300));
            wait.then( _ => { //  300 milliseconds are elapsed
                        if(state.callOccurrence > 0){ //  we have async events as many as we called f4 each time (callOccurrence)
                            state.callOccurrence -= 1; // all async event will do nothing after resolving
                        }else if (state.callOccurrence === 0){ // Just the last promise will invoke the 'cb' function if
                            state.cbIsCalled = true;           // there is not f4 calls anymore (callOccurrence = 0)
                            cb();
                        }
            });
            if(!state.firstCall){ // If it's not the first call of f4.
                  if(state.cbIsCalled){ // If cb has already been called don't do anything,
                     return;            // cb must be called just once after 300ms.
                  }else{ // f4 was called before 300 milliseconds are elapsed.
                     state.callOccurrence += 1; 
                  }
            }else{
				state.firstCall = false;
            }
		}
    }
}());
