
/*
 * Align Rect To frame for Sketch.app
 * Author: Tingji Liu
 * Version: 1.0
 */

function align()
{
    var biggestItem;
    var AlignedRects[];
    var biggestNumber = 0;
    var index = 0;
    var minX = 999999;
    var maxX = 0;
    var maxY = 0;
    var minY = 999999;
    var directionTJ = “vertical”;
    var sortedRec[];
    var selectionCount =[selection count];
    log("align called...");

    
    if ((maxY - minY) < (maxX - minX))  //Vertical difference defines direction.
    {
        var totalWidth = 0
        sort("v");
        for (var i=0; i< selectionCount;i++)
        {
            totalWidth+= [AlignedRects[i],width];
        }
        var allSpace = [Biggest width] - totalWidth;
        var spaceBetween = allSpace/(selectionCount+1);
        // Set equal space horizontally and vertically centre.
        var baseX = [Biggest x];
        for (var i=0; i<[AlignedRects count];i++)
        {
            [sortedRec[i],x]=baseX+spaceBetween;
            baseX = [sortedRec[i],maxX];
            [sortedRec[i],midY] = [Biggest midY];
        }
    }
    else
    {
        sort("h");
        var totalHeight = 0
        for (var i=0; i< selectionCount;i++)
        {
            totalHeight+= [selection[i],height];
        }
        var allSpace = [Biggest height] - totalHeight;
        var spaceBetween = allSpace/(selectionCount+1);
        // Set equal space horizontally and vertically centre.
        var baseY = [Biggest y];
        for (var i=0; i<selectionCount;i++)
        {
            [sortedRec[i],y]=baseY+spaceBetween;
            baseY = [sortedRec[i],maxY];
            [sortedRec[i],midX] = [Biggest midX];
        }
    }



    function sort(dir)
    {
        var j=0;
        var smallest = 999999;
        var tempArr[];
        var numberArr[];
        var sortedArr[];
        var sortedRec[];
        var smallestIndex;
        if (dir== “h”)
        {

            for (var i=0; i<[AlignedRects count];i++) // copy x's
            {
                numberArr[i] = [AlignedRects[i] x];
            }
        }
        else
        {
            for (var i=0; i<[AlignedRects count];i++) // copy y's
            {
            numberArr[i] = [AlignedRects[i] y];
            }
        }
        
        
        for (var j=0; j<[AlignedRects count];j++) // get sorted order
        {
            for (var i=0; i<[AlignedRects count];i++)
            {
                if numberArr[i] < smallest
                {
                smallest = numberArr[i];
                smallestIndex = i;
                }
            }
            
            sortedArr[j] = smallestIndex;
            numberArr[smallestIndex] = 10000000;
        }
        
        // Copy sorted order to sortedRec Array;
        for (var i=0; i<[AlignedRects count];i++) // copy x's
        {
            sortedRec[i] = AlignedRects[sortedArr[i]];
        }
        
    }
    
}

