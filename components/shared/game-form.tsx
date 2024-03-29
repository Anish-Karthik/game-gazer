"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as z from "zod"

import { Game, GetAllGamesDocument } from "@/lib/gql/graphql"
import {
  useCreateGameMutation,
  useUpdateGameMutation,
} from "@/lib/graphql/generated/types-and-hooks"
import { UploadDropzone } from "@/lib/utils/uploadthing"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// "PC", "Xbox", "Playstation", "Nintendo", "Android", "IOS"
const platforms = [
  {
    id: "PC",
    label: "PC",
  },
  {
    id: "Xbox",
    label: "Xbox",
  },
  {
    id: "Playstation",
    label: "Playstation",
  },
  {
    id: "Nintendo",
    label: "Nintendo",
  },
  {
    id: "Android",
    label: "Android",
  },
  {
    id: "IOS",
    label: "IOS",
  },
] as const

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  image: z
    .string()
    .url({
      message: "Image must be a valid URL.",
    })
    .nullable(),
  genre: z.string().min(1, {
    message: "Genre must not be empty.",
  }),
  company: z.string().min(1, {
    message: "Company must not be empty.",
  }),
  platform: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  releaseDate: z.string().min(1, {
    message: "Release Date must not be empty.",
  }),
})

const GameForm = ({
  prevData,
}: {
  prevData?: z.infer<typeof formSchema> & Game
}) => {
  const router = useRouter()
  const [addGame, { loading, error }] = useCreateGameMutation({
    update: (cache, { data }) => {
      const oldData = cache.readQuery({ query: GetAllGamesDocument })
      cache.writeQuery({
        query: GetAllGamesDocument,
        data: { ...oldData, Game: [...oldData!.Game, data?.insert_Game_one] },
      })
    },
  })
  const [updateGame] = useUpdateGameMutation({
    update: (cache, { data }) => {
      const oldData = cache.readQuery({ query: GetAllGamesDocument })
      const newData = oldData?.Game.map((item) =>
        item.id === data!.update_Game_by_pk!.id ? data?.update_Game_by_pk : item
      )
      cache.writeQuery({
        query: GetAllGamesDocument,
        data: { ...oldData, Game: newData },
      })
    },
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: prevData?.title || "",
      description: prevData?.description || "",
      image: prevData?.image || "",
      genre: prevData?.genre || "",
      company: prevData?.developer || "",
      platform: prevData?.platform?.length
        ? [...prevData.platform]
        : ["Nintendo"],
      releaseDate: prevData?.releaseDate || "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!prevData) {
      await addGame({
        variables: {
          input: {
            title: values.name,
            description: values.description,
            image: values.image,
            genre: values.genre,
            developer: values.company,
            platform: values.platform,
            publisher: values.company,
            releaseDate: new Date(values.releaseDate),
          },
        },
      })
    } else {
      await updateGame({
        variables: {
          gameId: {
            id: prevData.id,
          },
          input: {
            title: values.name,
            description: values.description,
            image: values.image,
            genre: values.genre,
            developer: values.company,
            platform: values.platform,
            publisher: values.company,
            releaseDate: new Date(values.releaseDate),
          },
        },
      })
    }
    router.push("/games")
    console.log(values)
  }
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error?.message}</p>
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="grid gap-2 max-md:grid-cols-2 max-sm:grid-cols-1 md:grid-cols-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Game of Thrones.." {...field} />
                </FormControl>
                <FormDescription>
                  This is the name of your game.
                </FormDescription>
                <FormMessage
                  itemType="error"
                  hidden={!form.getFieldState("name").invalid}
                >
                  Invalid
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Genre</FormLabel>
                <FormControl>
                  <Input placeholder="Action" {...field} />
                </FormControl>
                <FormDescription>This is the Game genre</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Ubisoft" {...field} />
                </FormControl>
                <FormDescription>This is the Game company</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="releaseDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Release Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormDescription>This is the Game release date</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="This a single player RPG game.."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <UploadDropzone
                  className="max-h-56"
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res)
                    field.onChange(res[0].url)
                    toast.success("Upload Completed")
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`)
                  }}
                />
              </FormControl>
              <FormDescription>This is the image of your game.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="platform"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Platform</FormLabel>
                <FormDescription>
                  Select the platforms the game is available on.
                </FormDescription>
              </div>
              <div className="flex flex-col gap-2 lg:flex-row">
                {platforms.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="platform"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    )
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default GameForm
