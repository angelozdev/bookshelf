export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      authors: {
        Row: {
          cover: string | null
          created_at: string
          description: string | null
          id: string
          name: string
        }
        Insert: {
          cover?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
        }
        Update: {
          cover?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      books: {
        Row: {
          cover: string | null
          created_at: string
          description: string | null
          id: string
          score: number | null
          status: string
          title: string
        }
        Insert: {
          cover?: string | null
          created_at?: string
          description?: string | null
          id?: string
          score?: number | null
          status?: string
          title?: string
        }
        Update: {
          cover?: string | null
          created_at?: string
          description?: string | null
          id?: string
          score?: number | null
          status?: string
          title?: string
        }
        Relationships: []
      }
      books_authors: {
        Row: {
          author_id: string
          book_id: string
          created_at: string | null
        }
        Insert: {
          author_id: string
          book_id: string
          created_at?: string | null
        }
        Update: {
          author_id?: string
          book_id?: string
          created_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "books_authors_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "authors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "books_authors_book_id_fkey"
            columns: ["book_id"]
            referencedRelation: "books"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
