import { Request, Response } from "express";
import { supabaseClient } from "../supabaseClient";

export const getPlayers = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabaseClient.from("players").select();
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
