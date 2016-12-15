function areIntersected(rect1, rect2)
{
   
    var right1, bottom1, right2, bottom2, vertical, horizontal;
    
    right1 = rect1.left + rect1.width;
    right2 = rect2.left + rect2.width;
    bottom1 = rect1.top + rect1.height;
    bottom2 = rect2.top + rect2.height;
    
    if (rect1.top < rect2.top)
    {
        vertical = bottom1 > rect2.top;
    }
    else
    {
        vertical = rect1.top < bottom2;
    }
    
    if (rect1.left < rect2.left)
    {
        horizontal = right1 > rect2.left;        
    }
    else
    {
        horizontal = rect1.left < right2;
    }
        
     
    return vertical && horizontal;        
}


function filterVisible(rect, rectArr)
{
    var visibleRectArray = rectArr.filter(function(elem)
    {
        if(elem.height&&elem.width&&areIntersected(rect,elem))
        {
            return true;
        }
        else 
        {
            return false;        
        }
        
    }
);
    return visibleRectArray;
}

console.log(areIntersected({left:0, top:0, width:20, height:20},{left:-10, top:-10, width:25, height:25}));