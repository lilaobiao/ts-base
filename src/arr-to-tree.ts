declare type TreeNode = {
  id: number,
  parent_id: number,
  name: string,
  region_level?:string,
  children?: TreeNode[]
}
interface CacheObj {
  [propName: number]: TreeNode[];
}

function translate(arr:TreeNode[]): TreeNode[]{
  let provinceNodes:TreeNode[] = []
  let cityNodes:TreeNode[] = []
  let cityCacheObj:CacheObj = {}
  let otherCacheObj:CacheObj = {}
  // 第一次循环，将数据分出三个层级
  for(let i: number = 0; i < arr.length; i++){
    let item = arr[i]
    // 省
    if(item.region_level === 'REGION_LEVEL_PROVINCE'){
      provinceNodes.push(item)
    }
    // 城市
    else if(item.region_level === 'REGION_LEVEL_CITY'){
      cityNodes.push(item)
    }
    // 其他
    else{
      if(!otherCacheObj[item.parent_id]){
        otherCacheObj[item.parent_id] = []
      }
      otherCacheObj[item.parent_id].push(item)
    }
  }

  // 第二次循环，将第三层级的数据放到第二层级
  for(let j: number = 0; j < cityNodes.length; j++){
    let item = cityNodes[j]
    if(otherCacheObj[item.id]){
      item.children = otherCacheObj[item.id]
    }
    if(!cityCacheObj[item.parent_id]){
      cityCacheObj[item.parent_id] = []
    }
    cityCacheObj[item.parent_id].push(item)
  }

  // 第三次循环，将第二层级的数据放到第一层级
  for(let k: number = 0; k < provinceNodes.length; k++){
    let item = provinceNodes[k]
    if(cityCacheObj[item.id]){
      item.children = cityCacheObj[item.id]
    }
  }
  return provinceNodes
}
