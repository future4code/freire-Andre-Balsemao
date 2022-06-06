function calculaNota(ex, p1, p2) {

  const mediaAluno = ((p1 * 2) + (p2 * 3) + (ex *1)) / 6
  
  if (mediaAluno >= 9){
  return "A"
  }
  if (mediaAluno< 9 && mediaAluno >= 7.5){
  return "B"
  }
  if (mediaAluno<7.5 && mediaAluno>=6){
  return "C"
  }
  if (mediaAluno<6){
  return "D"
  }
  return mediaAluno
}
  
