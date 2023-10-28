export class CounterService{
    activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  clickedCount:number=0;
  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to Inactive: ' + this.activeToInactiveCounter);
  }

  incrementInActiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to Active: ' + this.inactiveToActiveCounter);
  }
  onIncrementCount(){
    this.clickedCount = this.clickedCount+1;
    return this.clickedCount;
  }
}