function areIntersected(rect1, rect2)
{
    if (rect1.left>(rect2.top + rect2.width) ||
        (rect1.top + rect1.width) < rect2.left ||
        rect1.top > (rect2.left + rect2.height) ||
        (rect1.left + rect1.height) > rect2.top)
        {
            return false;
        }
    else
        {
            return true;
        }
}

function filterVisible(rect, rectArr)
{
    var visibleRectArray = rectArr.filter(areIntersected);
    return visibleRectArray;
}