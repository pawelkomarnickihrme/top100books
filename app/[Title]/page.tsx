import { Photo } from '@/components/Photo'
import { Star } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { createClient } from '../../utils/supabase/server'
import { getSubstringBeforeFirstHyphen, replaceHyphensWithSpaces } from '../../utils/strings'
import { BookInfo } from '../../components/BookInfo/BookInfo'
import { MDXRemote } from 'next-mdx-remote/rsc'

function StarRating({ rating }: { rating: number | null }) {
  if (rating === null) return null

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-6 h-6 ${
            index < Math.floor(rating)
              ? 'text-yellow-400 fill-current'
              : index < Math.ceil(rating)
                ? 'text-yellow-400 fill-current half-star'
                : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export default async function Page({ params }: { params: { Title: string } }) {
  const ID = getSubstringBeforeFirstHyphen(params.Title)
  const supabase = createClient()
  let { data: book, error } = await supabase.from('top 100 novels').select('*').eq('Index', ID).limit(1).single()

  return (
    <section
      id="features"
      className="container max-w-[52rem] px-10 space-y-6 bg-zinc-50 py-2 dark:bg-zinc-900 md:py-4 lg:py-6  mb-10"
    >
      <BookInfo
        title={book.Title}
        author={book.Author}
        avgRating={book.Rating}
        year={book['Publication Year']}
        pages={book['Page Count']}
        link={book['Cover Image URL']}
        id={book.Index}
      />
      <div className="prose mx-auto  leading-6 text-xl">
        <MDXRemote source={text} />
      </div>
    </section>
  )
}

const text = `### To Kill a Mockingbird Summary

**To Kill a Mockingbird** is a Pulitzer Prize-winning novel by Harper Lee, published in 1960. The story takes place in the fictional town of Maycomb, Alabama, during the Great Depression. The novel is a coming-of-age tale that explores themes of racial injustice, prejudice, and the loss of innocence through the eyes of its young protagonists.

### Main Characters

- **Scout Finch**: The protagonist and narrator, a young girl who ages from six to nine years old during the story.
- **Jem Finch**: Scout's older brother, who struggles with the injustices he witnesses.
- **Atticus Finch**: The children's father, a lawyer with high moral standards who defends a black man falsely accused of rape.
- **Boo Radley**: A reclusive neighbor who becomes a central figure in the children's lives.
- **Tom Robinson**: A black man falsely accused of raping a white woman.
- **Calpurnia**: The Finches' black housekeeper who plays a significant role in the children's upbringing.
- **Mayella Ewell**: The white woman who accuses Tom Robinson of rape.
- **Bob Ewell**: Mayella's father, a violent and abusive man.

### Plot Summary

The story begins with Scout, Jem, and their friend Dill becoming fascinated by the mysterious Boo Radley, a reclusive neighbor rumored to be a dangerous man. The children try to get Boo to come out of his house, but their efforts are met with warnings from their father, Atticus, who teaches them about empathy and understanding.

Meanwhile, Atticus agrees to defend Tom Robinson, a black man falsely accused of raping Mayella Ewell. Despite overwhelming evidence of Tom's innocence, he is found guilty and later killed while trying to escape custody. The trial and its aftermath expose the deep-seated racial prejudices in Maycomb, and Scout and Jem struggle to understand the injustices they witness.

Throughout the novel, Boo Radley becomes a symbol of kindness and redemption. He leaves small gifts for the children in an old tree outside his house and eventually saves Scout and Jem from an attack by Bob Ewell. In the end, Boo is revealed to be a kind and gentle man who has been misunderstood by the community.

### Themes

- **Racial Injustice and Prejudice**: The novel explores the deep-seated racial prejudices in Maycomb, particularly through the trial of Tom Robinson.
- **Loss of Innocence**: Scout and Jem's experiences force them to confront the harsh realities of the adult world, leading to a loss of innocence.
- **Morality and Integrity**: Atticus Finch serves as a moral compass, teaching his children about empathy, understanding, and doing what is right in the face of overwhelming opposition.
- **Social Class and Gender Roles**: The novel touches on the social class differences in Maycomb and the limited roles available to women during the Great Depression.
- **Empathy and Compassion**: The story emphasizes the importance of understanding and empathizing with others, as seen through Atticus's defense of Tom Robinson and his treatment of Boo Radley.

### Significance and Adaptations

**To Kill a Mockingbird** is considered a classic of modern American literature and has won numerous awards, including the Pulitzer Prize for Fiction in 1961. It has been adapted into a successful film in 1962, directed by Robert Mulligan and starring Gregory Peck as Atticus Finch. The novel remains widely taught in schools for its themes of racial injustice, morality, and empathy.

### Conclusion

**To Kill a Mockingbird** is a powerful exploration of racial injustice, prejudice, and the loss of innocence in a small Alabama town during the Great Depression. Through the eyes of its young protagonists, the novel teaches valuable lessons about empathy, morality, and the importance of doing what is right in the face of overwhelming opposition.`
