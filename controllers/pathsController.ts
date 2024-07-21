import { Request, Response } from "express";
import { supabaseClient } from "../supabaseClient";

export const getPaths = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabaseClient.from("paths").select();
    if (error) throw error;
    const formattedData = data.reduce((acc, currentItem, index) => {
      if (!acc[currentItem.path]) {
        acc[currentItem.path] = [];
      }

      acc[currentItem.path].push(currentItem);
      return acc;
    }, []);
    res.json(formattedData);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
