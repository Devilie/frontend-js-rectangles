function areIntersected(rect1, rect2)
{
    return (
        ((rect1.left > rect2.left && rect1.left < rect2.left+rect2.width)||
         (rect1.left+rect1.width > rect2.left && rect1.left+rect1.width < rect2.left+rect2.width)       
        )
        &&
        ((rect1.top > rect2.top && rect1.top < rect2.top+rect2.height)|| (rect1.top+rect1.height > rect2.top && rect1.top+rect1.height < rect2.top+rect2.height)
        )
        ||
        (((rect2.left > rect1.left && rect2.left < rect1.left+rect1.width)||(rect2.left+rect2.width > rect1.left && rect2.left+rect2.width < rect1.left+rect1.width)
         )
         &&
         ((rect2.top>rect1.top && rect2.top<rect1.top+rect1.height)||(rect2.top+rect2.height>rect1.top && rect2.top+rect2.height<rect1.top+rect1.height))
        )
        ||
        (
            (((rect1.left > rect2.left && rect1.left < rect2.left+rect2.width)||(rect1.left+rect1.width > rect2.left && rect1.left+rect1.width < rect2.left+rect2.width))
             &&
             ((rect2.top > rect1.top && rect2.top < rect1.top+rect1.height)||(rect2.top+rect2.height > rect1.top && rect2.top+rect2.height < rect1.top+rect1.height)))
            ||
            (((rect2.left > rect1.left && rect2.left <rect2.left+rect1.width)||(rect2.left+rect2.width > rect1.left && rect2.left+rect2.width <rect1.left+rect1.width))
             &&
             ((rect1.top > rect2.top && rect1.top < rect2.top+rect2.height)||(rect1.top+rect1.height > rect2.top && rect1.top+rect1.height < rect2.top+rect2.height)))
        )
        );
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

console.log(areIntersected({left:0, top:0, width:20, height:20},{left:10, top:10, width:35, height:35}));