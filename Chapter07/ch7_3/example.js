let unitKyori;
let maru = new Array();

class Maru{
	constructor(xx, yy){
		this.x = xx;
		this.y = yy;
		this.kyori = 0;
//❶ 角度変数の追加
		this.kakudo = 0;
	}
}

function setup(){	//最初に実行される
	let unitYokoKazu = 20;
	let yokoInterval = screenWidth / (unitYokoKazu-1);
	let tateInterval = yokoInterval * Math.sin(Math.PI/3);
	let unitTateKazu = Math.ceil(screenHeight / tateInterval);
	unitKyori = yokoInterval;
	for(let i=0; i<unitYokoKazu*unitTateKazu; ++i){
		let tateNum = parseInt(i / unitYokoKazu);
		let yokoNum = i % unitYokoKazu;
		let x = yokoInterval*yokoNum;
		let y = tateInterval*tateNum;
		if(tateNum % 2 == 1)	x += yokoInterval/2;
		maru[i] = new Maru(x, y);
	}
}

function loop(){	//常時実行される
	for(let i=0; i<maru.length; ++i){
		maru[i].kyori = Math.sqrt(Math.pow(curYubiX - maru[i].x, 2) + Math.pow(curYubiY - maru[i].y, 2));
//❷ 指との角度の計算
		maru[i].kakudo = Math.atan2(curYubiY - maru[i].y, curYubiX - maru[i].x);
	}
	
	let screenSize = Math.min(screenWidth, screenHeight);

	ctx.clearRect(0, 0, screenWidth, screenHeight);
	for(let i=0; i<maru.length; ++i){
		let par = maru[i].kyori/screenSize;
		par = Math.min(par, 1);
		let parR = 1 - par;

		let hankei = unitKyori / 2;
		hankei = hankei * parR;
//❸ 角度の描画
		ctx.fillStyle = "rgb("+parR*255+", "+parR*255+", "+parR*255+")";
		ctx.beginPath();
		ctx.arc(maru[i].x, maru[i].y, hankei, maru[i].kakudo-Math.PI/2, maru[i].kakudo+Math.PI/2, true);
		ctx.fill();

		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.arc(maru[i].x, maru[i].y, hankei, 0, Math.PI*2, true);
		ctx.stroke();
	}
}

function touchStart(){	//タッチ(マウスダウン)されたら
	
}

function touchMove(){	//指が動いたら(マウスが動いたら)
	
}

function touchEnd(){	//指が離されたら(マウスアップ)
	
}