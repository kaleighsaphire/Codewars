// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth){
    const areaAndVolume = []
    areaAndVolume.push((width*height*2)+(height*depth*2)+(depth*width*2)) 
    areaAndVolume.push(width*height*depth)
    return areaAndVolume;
}

Alt 
function getSize(width, height, depth){
    var box = { width: width, height:height, depth:depth};
    
    return [getArea(box), getVolume(box)];
  }
  
  
  function getArea(box){
    return (2 * (box.depth * box.height)) + (2 * (box.width * box.height)) + (2 * (box.width * box.depth));
  }
  
  function getVolume(box){
    return box.width * box.height * box.depth;
  }