import Router, { Request, Response } from 'express';


const superUserRouter = Router();

// Aqui onde vai ocorrer a criação do PRIMEIRO super usuário
superUserRouter.post("/registration", async (req: Request, res: Response) => {
  res.json({ message: "Super User registration endpoint" });
});

// Checa se existe um super usuário padrão (se ja foi feita o primeiro registro)
superUserRouter.get("/checkMainSuperUser", async (req: Request, res: Response) => {
  res.json({ message: "Super User check endpoint" });
})

// Aqui é a criação de um super usuário padrão
superUserRouter.post('/create', async (req: Request, res: Response) => {
  res.json({ message: "Super User create endpoint" });
});

// Atualização de um super usuário
superUserRouter.put("/update/:superUserId", async (req: Request, res: Response) => {
  res.json({ message: "Super User update endpoint" });
});

// Deleção de um super usuário
superUserRouter.delete("/delete/:superUserId", async (req: Request, res: Response) => {
  res.json({ message: "Super User delete endpoint" });
});

export default superUserRouter;