export const f1 = (a0, b0) => {
    if(a0 === b0){
        return 0;
    }else{
        let a = a0.split('').sort();
        let b = b0.split('').sort();
        let n = 0;
        if (a === b) return 0;
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
    }
};

export const f2 = (a, b) => b.map( el2 => a.filter( el1 => el1 === el2).length );

export const f3 = (a0) => {
    const s ='abcdefghijklmnopqrstuvwxyz_-0123456789';
    const a = a0.toLowerCase().split('.');
    if(a0 === '') return 0;
    for(el of a){
        for (c of el){
            if(!(s.includes(c))){
                return 0;
            }
        }
    }
    return a.length;
};


export const f4 = ( () => {
    const state = {
        cbIsCalled: false,
        firstCall: true,
    };
    const wait = () => { 
        cbwait = setTimeout(() => { 
            cb(); 
            state.cbIsCalled = true;
        }, 300);
    };
    const stopWait = () => clearTimeout(cbwait);
    let cbwait;
    return cb => { 
		if(!state.cbIsCalled){
            if(state.firstCall){  
                wait();
                state.firstCall = false;
            }else{
                stopWait();
                wait();
            }
		}else return;
    }
} )();