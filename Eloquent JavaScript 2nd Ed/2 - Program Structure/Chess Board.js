console.log('Chess Board');
function chessBoard(n){
	var chess = '';
	for(var i = 0; i < n; i++){
		if(i%2 == 0)
			for(var j = 0; j < n; j++)
				chess += '# ';
		else
			for(var j = 0; j < n; j++)
				chess += ' #';		
		chess += '\n';
	}
	return chess;
}

console.log(chessBoard(8));
