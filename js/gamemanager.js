let GameManager={
	setGameStart: function(classType){
		this.resetPlayer(classType);
		this.setPreFight();
	},
	resetPlayer: function(classType){
		switch(classType){
			case "Yuno":
				player= new Player(classType,200,0,200,100,250);
				break;
			case "Asta":
				player= new Player(classType,500,0,600,750,900);
				break;
			case "Zora":
				player= new Player(classType,80,0,75,100,50);
				break;
		
		}
		let getInterface=document.querySelector(".interface");
		getInterface.innerHTML='<img src="img/avatar-player/'+classType.toLowerCase()+'.jpg" class="img-avatar"><div><h3>'
		+classType+'</h3><p class="health-player">Health: '+player.health+ '</p>'+'<p>Mana: '+player.mana+'</p>'+'<p>Strength: '
		+player.strength+'</p>'+'<p>Agility: '+player.agility+'</p>'+'<p>Speed: '+player.speed+'</p></div>';
	},
	setPreFight: function(){
		let getHeader=document.querySelector(".header");
		let getActions=document.querySelector(".actions");
		let getArena=document.querySelector(".arena");
		getHeader.innerHTML='<p>Task: Find an enemy!</p>';
		getActions.innerHTML='<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for Opponent!</a>';
		getArena.style.visibility="visible";
	},
	setFight: function(){
		let getHeader=document.querySelector(".header");
		let getActions=document.querySelector(".actions");
		let getEnemy=document.querySelector(".enemy");
		
		//Create opponents!
		let enemy00 =new Enemy("yami",500,750,500,500,750);
		let enemy01 =new Enemy("julius",2000,5000,800,2000,1000);
		let chooseRandomEnemy=Math.floor(Math.random()*Math.floor(2));
		switch(chooseRandomEnemy){
			case 0:
				enemy=enemy00; 
				break;
			case 1:
				enemy=enemy01;
				break;
		}
		getHeader.innerHTML='<p>Task: Choose your move</p>';
		getActions.innerHTML='<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
		getEnemy.innerHTML='<img src="img/avatar-enemies/'+enemy.enemyType.toLowerCase()+'.jpg" class="img-avatar"><div><h3>'
		+enemy.enemyType+'</h3><p class="health-enemy">Health: '+enemy.health+ '</p>'+'<p>Mana: '+enemy.mana+'</p>'+'<p>Strength: '
		+enemy.strength+'</p>'+'<p>Agility: '+enemy.agility+'</p>'+'<p>Speed: '+enemy.speed+'</p></div>';
	}
}