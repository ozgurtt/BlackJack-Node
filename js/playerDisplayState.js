var playerDisplayState = {
    currentState : {},
    states : {
        
        oneHand : {
            displayCards : function(cssobject, playerPosition)
            {
                for(var card=0;card<glClientBoard.playerCards[playerPosition][0].length;card++) {
                    cssobject.append("<div class='card-container' data-card=\'" + glClientBoard.playerCards[playerPosition][0][card] 
                        + "\'"+ "style=\'bottom: " + 10*card + "px; left: " + 14*card + "px \'> </div>");        
                    }
            }
        },

        twoHands:{
            displayCards : function(cssobject,playerPosition){
                var columnposition;
                for(var hand=0;hand<glClientBoard.playerCards[playerPosition].length;hand++){
                    columnposition=30-hand*45;
                    for(var card=0;card<glClientBoard.playerCards[playerPosition][hand].length;card++){
                        cssobject.append("<div class='card-container' data-card=\'" + glClientBoard.playerCards[playerPosition][hand][card] 
                        + "\'"+ "style=\'bottom: " + 25*card + "px; right: " + columnposition + "px \'> </div>");
                    }
                }
            }
        },       

        threeHands:{
            displayCards : function(cssobject,playerPosition){
                var columnposition;
                for(var hand=0;hand<glClientBoard.playerCards[playerPosition].length;hand++){
                    columnposition=30-hand*21;
                    for(var card=0;card<glClientBoard.playerCards[playerPosition][hand].length;card++){
                        cssobject.append("<div class='card-container' data-card=\'" + glClientBoard.playerCards[playerPosition][hand][card] 
                        + "\'"+ "style=\'bottom: " + 25*card + "px; right: " + columnposition + "px \'> </div>");
                    }
                }     
            }
        },  

        fourHands: {
            displayCards : function(cssobject,playerPosition){
                var columnposition;
                for(var hand=0;hand<glClientBoard.playerCards[playerPosition].length;hand++){
                    columnposition=30-hand*15;
                    for(var card=0;card<glClientBoard.playerCards[playerPosition][hand].length;card++){
                        cssobject.append("<div class='card-container' data-card=\'" + glClientBoard.playerCards[playerPosition][hand][card] 
                        + "\'"+ "style=\'bottom: " + 25*card + "px; right: " + columnposition + "px \'> </div>");
                    }
                }     
            }
            
        },       
    },

    setState : function(state){
        this.currentState=this.states[state];
    },

    selectDisplayState : function(hands)
    {
         switch(hands){
            case 1:
            this.setState("oneHand");
            break;
            case 2:
            this.setState("twoHands");
            break;
            case 3:
            this.setState("threeHands");
            break;
            case 4:
            this.setState("fourHands");
            break;
        }
    },

    getState : function(){
        return this.currentState;
    }
};