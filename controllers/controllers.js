export function Home(req, res){
  res.send("hello world")
}
export function Post(req, res){
  const body = req.body
  res.json(body)
}
export function Dinamic(req, res){
  const { id } = req.params
  res.send(id)
}
export function User(req, res){
  res.status(200).json({view: "User"})
}