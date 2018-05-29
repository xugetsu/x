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
            wait.then( _ => {
                        if(state.callOccurrence > 0){
                            state.callOccurrence -= 1;
                        }else if (state.callOccurrence === 0){
                            state.cbIsCalled = true;
                            cb();
                        }
            });
            if(!state.firstCall){ 
                  if(state.cbIsCalled){
                     return;
                  }else{
                     state.callOccurrence += 1;
                  }
            }else{
				state.firstCall = false;
            }
		}
    }
}());
