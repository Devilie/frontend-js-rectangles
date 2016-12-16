function areIntersected(rect1, rect2)
{
    /* //first
    return (
            (
                (rect1.left > rect2.left && rect1.left < rect2.left+rect2.width)||
                (rect1.left+rect1.width > rect2.left && rect1.left+rect1.width < rect2.left+rect2.width)       
            )
            &&
            (
                (rect1.top > rect2.top && rect1.top < rect2.top+rect2.height)|| 
                (rect1.top+rect1.height > rect2.top && rect1.top+rect1.height < rect2.top+rect2.height)
            )
            ||
            (
                (
                    (rect2.left > rect1.left && rect2.left < rect1.left+rect1.width)||
                    (rect2.left+rect2.width > rect1.left && rect2.left+rect2.width < rect1.left+rect1.width)
                )
                &&
                (
                    (rect2.top>rect1.top && rect2.top<rect1.top+rect1.height)||
                    (rect2.top+rect2.height>rect1.top && rect2.top+rect2.height<rect1.top+rect1.height)
                )
            )
            ||
            (
                (
                    (
                        (rect1.left > rect2.left && rect1.left < rect2.left+rect2.width)||
                        (rect1.left+rect1.width > rect2.left && rect1.left+rect1.width < rect2.left+rect2.width)
                    )
                 &&
                    (
                        (rect2.top > rect1.top && rect2.top < rect1.top+rect1.height)||
                        (rect2.top+rect2.height > rect1.top && rect2.top+rect2.height < rect1.top+rect1.height)
                    )
                )
                ||
                (
                    (
                        (rect2.left > rect1.left && rect2.left <rect2.left+rect1.width)||
                        (rect2.left+rect2.width > rect1.left && rect2.left+rect2.width <rect1.left+rect1.width))
                 &&
                    (
                        (rect1.top > rect2.top && rect1.top < rect2.top+rect2.height)||
                        (rect1.top+rect1.height > rect2.top && rect1.top+rect1.height < rect2.top+rect2.height)))
            )
            ||
            (
                rect1.left == rect2.left && rect1.top == rect2.top && rect1.height == rect2.height && rect1.width == rect2.width
            )
        ); */
    
     //second
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
    
    /*//third 
    //can't pass 3 tests - [0,0; 20 x 20] and [-20,10; 5 x 5] -> true
    //'an array of rectangles' and 'an array of rectangles, where some are invisible'
    var right1, bottom1, right2, bottom2, vertical, horizontal;
    
    right1 = rect1.left + rect1.width;
    right2 = rect2.left + rect2.width;
    bottom1 = rect1.top + rect1.height;
    bottom2 = rect2.top + rect2.height;
    
    if ( (Math.min(rect1.top,bottom1) < Math.max(rect2.top,bottom2)) && ((Math.min(rect2.top,bottom2)) < (Math.max(rect1.top,bottom1))) )
        {
            horizontal = true; 
        }
    else
        {
            horizontal = false; 
        }
    if ((Math.min(rect1.left,right1) < (Math.max(rect2.top,right2))) && ((Math.min(rect2.left,right2)) < (Math.max(rect1.left,right1))))
        {
            vertical = true; 
        }
    else
        {
            vertical = false; 
        }
    return horizontal&&vertical;*/
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
        
    });
}