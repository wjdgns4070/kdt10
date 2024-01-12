import 'phaser';

class MainScene extends Phaser.Scene {
  player: Phaser.Physics.Arcade.Sprite;

  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    this.load.image('player', 'assets/player.JPG');
  }

  create() {
    this.player = this.physics.add.sprite(100, 100, 'player');
    this.physics.world.setBounds(0, 0, 800, 600);

    this.cameras.main.setBounds(0, 0, 800, 600);
    this.cameras.main.startFollow(this.player, true);

    this.input.keyboard.on('keydown_RIGHT', () => {
      this.player.setVelocityX(200);
    });

    this.input.keyboard.on('keyup_RIGHT', () => {
      this.player.setVelocityX(0);
    });
  }

  update() {
    // 게임 업데이트 루프
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: MainScene,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  }
};

const game = new Phaser.Game(config);
