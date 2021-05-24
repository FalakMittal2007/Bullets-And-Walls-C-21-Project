function hasCollided(lwall,lbullet){
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    bullet.velocityX=0;
if(bulletRightEdge>=wallLeftEdge)
{
return true;
}
return false;
  }