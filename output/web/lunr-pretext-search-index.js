var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   smakdonald.github   https:\/\/smakdonald.github.io\/index.html   copyright  "
},
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "How to Use This Book (*)",
  "body": "How to Use This Book (*)  I'm still in the process of figuring out exactly what this is for.   Future lecture notes for the hopeful possibility that one day I am teaching a course over this material.    Current notes for students taking the first year algebra sequence.    Assistance in studying for the Algebra Qualifying Exam at UNL.    Clout.     Blocks    Definition  These are pretty standard and probably what you'd be expecting. The building blocks of what we'll be working with.   Examples  Specific instances of a definition.   Theorem  A result.   Lemma  A more technical result used specifically in the proof of a larger result.   Corollary  An important result whose proof comes directly from a previous theorem.   Proposition  Results that require proof but are more specific and\/or contained in a larger result coming later.   Exploration  Generalizations, specifics, smaller results, things are are less essential to the course or results who's proofs are usually skipped.   Problem  Used for qualifying exam problems.   Remark  Providing context in the form of foreshadowing or content not covered in this text. In general, there shouldn't be anything defined in a remark, they should be entirely optional.   Discussion  Usually for arguing about notation.   Context  Historical and etymogical origins.   Footnotes  Sometimes act like remarks. However, most are strictly for fun and add little to no educational value, at least in the traditional sense. It should really be feetnote if you think about it.       "
},
{
  "id": "p-6",
  "level": "2",
  "url": "preface-1.html#p-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition Examples Theorem Lemma Corollary Proposition Exploration Problem Remark Discussion Context Footnotes "
},
{
  "id": "sec-overview",
  "level": "1",
  "url": "sec-overview.html",
  "type": "Section",
  "number": "1.1",
  "title": "Overview of the Course",
  "body": "Overview of the Course    Distance might not solve anything. No matter how far you run.   Haruki Murakami   Spaces we live in - Euclidean room, spherical world, hyperbolic universe Describe these spaces without \"distance\" When does calculus, and in particular the Extreme Value Theorem, apply to these spaces?  "
},
{
  "id": "sec-sets-functions",
  "level": "1",
  "url": "sec-sets-functions.html",
  "type": "Section",
  "number": "1.2",
  "title": "Useful Tools on Sets and Functions",
  "body": "Useful Tools on Sets and Functions     The excellence of a thing related to its proper function.   Aristotle    Properties of Sets  Distributive laws    and     De Morgan's laws    and     Template to prove two sets are equal  Power Set   The power set  of a set is the set of all subsets of .     Discussion of standard mathematical conventions for notation Notation for indices: for finite or countably many indices, for arbitrarily many indices. Notation for sets, elements of sets, and sets of sets: Small letters for elements of sets, capital letters for sets, calligraphic capital letters for collections of sets.   Properties of functions    For a function , the set is the domain , the set is the codomain .    Template to define a function  Template to prove two functions are equal    A function is well-defined if whenever and , then .     All functions are well-defined.     Let be a function.   The function is one-to-one (also called an injection and denoted ) if whenever and then .    The function is onto (also called a surjection and denoted ) if for every in , there is an in with .    The function is a bijection if is both one-to-one and onto.    The function is invertible if there is a function such that and .         Let , and be functions. Then:   If and are one-to-one then ba is one-to-one.    If is one-to-one then a is one-to-one.    If and are onto then is onto.    If is onto then is onto.     is a bijection if and only if is invertible.            Let be a function.   The image of a subset of is .    The preimage of a subset of is .    The image of is .          PAN = Preimages are nice   If , , and for all , then    .     .     .     .       IASN = Images are sometimes nice   If , and , then    .     .     . If moreover is injective, then .     . If moreover is injective, then .         Let .   If , then ; if moreover is injective then .    If then ; if moreover is surjective then .        Constructions of new sets from old ones, and the associated functions  Subsets    Let be a set. A subset of is a set of some (possibly none, possibly all, possibly neither) of the elements of .      Let . The inclusion map is the function defined by for all .      If and is the inclusion, then is an injection.     Product sets    Let , and for all be sets. The Cartesian product  .         Let for all be sets and let . The projection map  is defined by .      Let for all be sets, let , and for each , let . The associated product inclusion map  is defined for each by , where and .            Projection maps are surjections.    Product inclusion maps are injections.         If and , then .    Axiom of Choice   If for all , then .     Quotient sets and equivalence relations    An equivalence relation  on a set is a subset of (where is written ) that satisfies the following for all in :  Reflexive   ,   Symmetric   implies , and   Transitive   and implies .   The equivalence class of an element of is . The notation denotes the set of equivalence classes, also called the quotient of with respect to . The function defined by for all is called the equivalence map .         A partition of a set is a collection of nonempty disjoint subsets of whose union is .      Let be a set.   If is an equivalence relation on , then is a partition of .    If is a partition of , and , then is an equivalence relation on .               Let be a function, and let . Then is an equivalence relation on .    FBT = Function Building Theorem for quotient sets   Let be an equivalence relation on a set , and let be a function satisfying the property that whenever and then . Then:   There is a well-defined function defined by for all in ; that is, , where is the equivalence map.    If is onto, then is onto.    If also satisfies the property that whenever and then , then is one-to-one.          Template for proving a well-defined function with domain .          Let be a set and let be a subset of . The equivalence relation on generated by  is the intersection of all of the equivalence relations on that contain .      Cardinality       A set is finite if there is a bijection for some natural number , or is empty. In this case the number is called the cardinality of .    A set is infinite if is not finite. A set is countable if there is an injection .         Let be a set.   The following are equivalent:    is finite.    There is an onto function for some .    There is a one-to-one function for some .       The following are equivalent:    is infinite.    There is an onto function .    There is a one-to-one function .       The following are equivalent:    is countable.    There is an onto function .    There is an injection .               The class of finite sets is closed under: subsets, intersections, finite unions, and finite products.    The class of countable sets is closed under: subsets, intersections, countable unions, and finite products.              Upper and lower bound properties of and        An upper bound for a subset is a real number satisfying for all .    A lower bound for a subset is a real number satisfying for all .           Least upper bound property of  If and has an upper bound, then has a least upper bound.   Greatest lower bound property of  If and has a lower bound, then has a greatest lower bound.       Archimedean property of    has no upper bound in .     "
},
{
  "id": "thm-1.1",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.1",
  "type": "Theorem",
  "number": "1.2.1",
  "title": "Distributive laws.",
  "body": "Distributive laws    and    "
},
{
  "id": "thm-1.2",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.2",
  "type": "Theorem",
  "number": "1.2.2",
  "title": "De Morgan's laws.",
  "body": "De Morgan's laws    and    "
},
{
  "id": "def-1.3",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.3",
  "type": "Definition",
  "number": "1.2.3",
  "title": "Power Set.",
  "body": "Power Set   The power set  of a set is the set of all subsets of .   "
},
{
  "id": "def-1.6",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.6",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": "  For a function , the set is the domain , the set is the codomain .   "
},
{
  "id": "def-1.7",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.7",
  "type": "Definition",
  "number": "1.2.5",
  "title": "",
  "body": "  A function is well-defined if whenever and , then .   "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec-sets-functions.html#remark-1",
  "type": "Remark",
  "number": "1.2.6",
  "title": "",
  "body": " All functions are well-defined.  "
},
{
  "id": "def-1.8",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.8",
  "type": "Definition",
  "number": "1.2.7",
  "title": "",
  "body": "  Let be a function.   The function is one-to-one (also called an injection and denoted ) if whenever and then .    The function is onto (also called a surjection and denoted ) if for every in , there is an in with .    The function is a bijection if is both one-to-one and onto.    The function is invertible if there is a function such that and .      "
},
{
  "id": "thm-1.9",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.9",
  "type": "Theorem",
  "number": "1.2.8",
  "title": "",
  "body": "  Let , and be functions. Then:   If and are one-to-one then ba is one-to-one.    If is one-to-one then a is one-to-one.    If and are onto then is onto.    If is onto then is onto.     is a bijection if and only if is invertible.      "
},
{
  "id": "example-1",
  "level": "2",
  "url": "sec-sets-functions.html#example-1",
  "type": "Example",
  "number": "1.2.9",
  "title": "",
  "body": "  "
},
{
  "id": "def-1.10",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.10",
  "type": "Definition",
  "number": "1.2.10",
  "title": "",
  "body": "  Let be a function.   The image of a subset of is .    The preimage of a subset of is .    The image of is .      "
},
{
  "id": "example-2",
  "level": "2",
  "url": "sec-sets-functions.html#example-2",
  "type": "Example",
  "number": "1.2.11",
  "title": "",
  "body": "  "
},
{
  "id": "thm-pan",
  "level": "2",
  "url": "sec-sets-functions.html#thm-pan",
  "type": "Theorem",
  "number": "1.2.12",
  "title": "PAN = “Preimages are nice”.",
  "body": "PAN = Preimages are nice   If , , and for all , then    .     .     .     .      "
},
{
  "id": "thm-iasn",
  "level": "2",
  "url": "sec-sets-functions.html#thm-iasn",
  "type": "Theorem",
  "number": "1.2.13",
  "title": "IASN = “Images are sometimes nice”.",
  "body": "IASN = Images are sometimes nice   If , and , then    .     .     . If moreover is injective, then .     . If moreover is injective, then .      "
},
{
  "id": "thm-1.13",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.13",
  "type": "Theorem",
  "number": "1.2.14",
  "title": "",
  "body": "  Let .   If , then ; if moreover is injective then .    If then ; if moreover is surjective then .      "
},
{
  "id": "def-1.15",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.15",
  "type": "Definition",
  "number": "1.2.15",
  "title": "",
  "body": "  Let be a set. A subset of is a set of some (possibly none, possibly all, possibly neither) of the elements of .   "
},
{
  "id": "def-1.16",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.16",
  "type": "Definition",
  "number": "1.2.16",
  "title": "",
  "body": "  Let . The inclusion map is the function defined by for all .   "
},
{
  "id": "prop-1.17",
  "level": "2",
  "url": "sec-sets-functions.html#prop-1.17",
  "type": "Proposition",
  "number": "1.2.17",
  "title": "",
  "body": "  If and is the inclusion, then is an injection.   "
},
{
  "id": "def-1.20",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.20",
  "type": "Definition",
  "number": "1.2.18",
  "title": "",
  "body": "  Let , and for all be sets. The Cartesian product  .   "
},
{
  "id": "example-3",
  "level": "2",
  "url": "sec-sets-functions.html#example-3",
  "type": "Example",
  "number": "1.2.19",
  "title": "",
  "body": "  "
},
{
  "id": "def-1.21",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.21",
  "type": "Definition",
  "number": "1.2.20",
  "title": "",
  "body": "  Let for all be sets and let . The projection map  is defined by .   "
},
{
  "id": "def-1.22",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.22",
  "type": "Definition",
  "number": "1.2.21",
  "title": "",
  "body": "  Let for all be sets, let , and for each , let . The associated product inclusion map  is defined for each by , where and .   "
},
{
  "id": "example-4",
  "level": "2",
  "url": "sec-sets-functions.html#example-4",
  "type": "Example",
  "number": "1.2.22",
  "title": "",
  "body": "  "
},
{
  "id": "thm-1.23",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.23",
  "type": "Theorem",
  "number": "1.2.23",
  "title": "",
  "body": "     Projection maps are surjections.    Product inclusion maps are injections.      "
},
{
  "id": "lem-1.24",
  "level": "2",
  "url": "sec-sets-functions.html#lem-1.24",
  "type": "Lemma",
  "number": "1.2.24",
  "title": "",
  "body": "  If and , then .   "
},
{
  "id": "axiom-choice",
  "level": "2",
  "url": "sec-sets-functions.html#axiom-choice",
  "type": "Axiom",
  "number": "1.2.25",
  "title": "Axiom of Choice.",
  "body": "Axiom of Choice   If for all , then .   "
},
{
  "id": "def-1.27",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.27",
  "type": "Definition",
  "number": "1.2.26",
  "title": "",
  "body": "  An equivalence relation  on a set is a subset of (where is written ) that satisfies the following for all in :  Reflexive   ,   Symmetric   implies , and   Transitive   and implies .   The equivalence class of an element of is . The notation denotes the set of equivalence classes, also called the quotient of with respect to . The function defined by for all is called the equivalence map .   "
},
{
  "id": "example-5",
  "level": "2",
  "url": "sec-sets-functions.html#example-5",
  "type": "Example",
  "number": "1.2.27",
  "title": "",
  "body": "  "
},
{
  "id": "def-1.28",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.28",
  "type": "Definition",
  "number": "1.2.28",
  "title": "",
  "body": "  A partition of a set is a collection of nonempty disjoint subsets of whose union is .   "
},
{
  "id": "prop-1.29",
  "level": "2",
  "url": "sec-sets-functions.html#prop-1.29",
  "type": "Proposition",
  "number": "1.2.29",
  "title": "",
  "body": "  Let be a set.   If is an equivalence relation on , then is a partition of .    If is a partition of , and , then is an equivalence relation on .      "
},
{
  "id": "example-6",
  "level": "2",
  "url": "sec-sets-functions.html#example-6",
  "type": "Example",
  "number": "1.2.30",
  "title": "",
  "body": "     "
},
{
  "id": "thm-1.30",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.30",
  "type": "Theorem",
  "number": "1.2.31",
  "title": "",
  "body": "  Let be a function, and let . Then is an equivalence relation on .   "
},
{
  "id": "thm-1.31",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.31",
  "type": "Theorem",
  "number": "1.2.32",
  "title": "FBT = Function Building Theorem for quotient sets.",
  "body": "FBT = Function Building Theorem for quotient sets   Let be an equivalence relation on a set , and let be a function satisfying the property that whenever and then . Then:   There is a well-defined function defined by for all in ; that is, , where is the equivalence map.    If is onto, then is onto.    If also satisfies the property that whenever and then , then is one-to-one.      "
},
{
  "id": "example-7",
  "level": "2",
  "url": "sec-sets-functions.html#example-7",
  "type": "Example",
  "number": "1.2.33",
  "title": "",
  "body": "  "
},
{
  "id": "example-8",
  "level": "2",
  "url": "sec-sets-functions.html#example-8",
  "type": "Example",
  "number": "1.2.34",
  "title": "",
  "body": "     "
},
{
  "id": "def-1.32",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.32",
  "type": "Definition",
  "number": "1.2.35",
  "title": "",
  "body": "  Let be a set and let be a subset of . The equivalence relation on generated by  is the intersection of all of the equivalence relations on that contain .   "
},
{
  "id": "def-1.34",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.34",
  "type": "Definition",
  "number": "1.2.36",
  "title": "",
  "body": "     A set is finite if there is a bijection for some natural number , or is empty. In this case the number is called the cardinality of .    A set is infinite if is not finite. A set is countable if there is an injection .      "
},
{
  "id": "thm-1.35",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.35",
  "type": "Theorem",
  "number": "1.2.37",
  "title": "",
  "body": "  Let be a set.   The following are equivalent:    is finite.    There is an onto function for some .    There is a one-to-one function for some .       The following are equivalent:    is infinite.    There is an onto function .    There is a one-to-one function .       The following are equivalent:    is countable.    There is an onto function .    There is an injection .         "
},
{
  "id": "thm-1.36",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.36",
  "type": "Theorem",
  "number": "1.2.38",
  "title": "",
  "body": "     The class of finite sets is closed under: subsets, intersections, finite unions, and finite products.    The class of countable sets is closed under: subsets, intersections, countable unions, and finite products.      "
},
{
  "id": "example-9",
  "level": "2",
  "url": "sec-sets-functions.html#example-9",
  "type": "Example",
  "number": "1.2.39",
  "title": "",
  "body": "     "
},
{
  "id": "def-1.39",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.39",
  "type": "Definition",
  "number": "1.2.40",
  "title": "",
  "body": "     An upper bound for a subset is a real number satisfying for all .    A lower bound for a subset is a real number satisfying for all .      "
},
{
  "id": "def-1.40",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.40",
  "type": "Definition",
  "number": "1.2.41",
  "title": "",
  "body": "    Least upper bound property of  If and has an upper bound, then has a least upper bound.   Greatest lower bound property of  If and has a lower bound, then has a greatest lower bound.      "
},
{
  "id": "thm-1.41",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.41",
  "type": "Theorem",
  "number": "1.2.42",
  "title": "Archimedean property of <span class=\"process-math\">\\(\\N \\)<\/span>.",
  "body": "Archimedean property of    has no upper bound in .   "
},
{
  "id": "sec-topology",
  "level": "1",
  "url": "sec-topology.html",
  "type": "Section",
  "number": "2.1",
  "title": "Topology and Continuity",
  "body": "Topology and Continuity     Topology is precicely the mathematical discipline that allows passage from local to global.   Rene Thom    Topology    A topology on a set is a collection of subsets of satisfying:    and are elements of ;    whenever is in for all , then is in ; and    whenever are in , then is in .         A topological space is a set together with a topology on , often denoted . The elements of are called points in , and the elements of are called open sets in or open sets relative to or open sets rel .    Examples of Topologies and Topological Spaces:      Indiscrete topology on a set .    Discrete topology on a set the set of all subsets of .    Euclidean topology on , where is the ball of radius centered at (and is Euclidean distance).    Euclidean topology relative to a subset .    Finite complement topology on a set .    Included point topology on a set with included point .    Excluded point topology on a set with excluded point .    Infinite ray topology on .    Preimage topology constructed on a set from a function and a topology on .    Line with two origins with set and topology .    On the finite set .            All of the examples in are topologies.    Courser and Finer Topologies   Let and be topologies on a set . If , then the topology is called smaller or coarser than , and the topology is called larger or finer than .        Continuity  Motivation: Unraveling the definition of continuous in Euclidean space to an equivalent definition on open sets.  Continuous Function   Let and be topological spaces, and let be a function. The function is continuous if and only if for every open set in , the preimage is open in .     Examples   CC0      Let be a real number. The function defined by for all is continuous.    The functions from to defined by addition, subtraction, and multiplication are continuous.    The function defined by is continuous.    A uniform limit of continuous functions from to is continuous; hence sine and cosine are continuous.           CC1  If and are topological spaces and is a constant function, then is continuous.   CC2  If and are continuous, then the composition is continuous.                                 Let and be topological spaces and let . The function is continuous if and only if for all and , there exist with and .        Homeomorphism   Let and be topological spaces. A function is a homeomorphism if is a continuous bijection and is also continuous. The spaces and are called homeomorphic , or topologically equivalent, if there is a homeomorphism from to ; in symbols this is written .      \"Homeomorphic\" is an equivalence relation on topological spaces.    Big picture:  Euclidean, spherical and hyperbolic metric spaces of the same dimension are homeomorphic. .  Homeomorphism Problem   The Homeomorphism Problem asks: Is there a computer algorithm that, upon input of two topological spaces and , can determine whether or not ?    (Backing up a step: How do you input a space into a computer?!)       Bases  Basis   A basis on a set is a collection of subsets of satisfying:   For each in there is an in such that , and    whenever are in and is an element of , then there is an in such that .       Topology Generated by a Basis   The topology generated by a basis is .         If is a basis on , then is a topology on .    If is a topology on , then is also a basis on , and .             If is a basis on and , then is in if and only if is a union of elements of . That is, .    The Euclidean Basis  The Euclidean basis on is .      .    Lower Limit Topology   The lower limit topology on the set is the topology generated by the basis .      Let be a basis on a set . A function is continuous if and only if for every basis element , the preimage is open in .      Let and be bases on a set . Then iff for all in and in , there is an in with .    Subbasis   A subbasis on a set is a collection of subsets of satisfying .      The basis generated by a subbasis is . The topology generated by a subbasis is .         Let be a subbasis on a set .   The basis generated by the subbasis is a basis, and hence the topology generated by the subbasis is a topology.    A function is continuous if and only if for every subbasis element , the preimage is open in .        "
},
{
  "id": "def-2.1",
  "level": "2",
  "url": "sec-topology.html#def-2.1",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  A topology on a set is a collection of subsets of satisfying:    and are elements of ;    whenever is in for all , then is in ; and    whenever are in , then is in .      "
},
{
  "id": "def-2.2",
  "level": "2",
  "url": "sec-topology.html#def-2.2",
  "type": "Definition",
  "number": "2.1.2",
  "title": ".",
  "body": "  A topological space is a set together with a topology on , often denoted . The elements of are called points in , and the elements of are called open sets in or open sets relative to or open sets rel .   "
},
{
  "id": "def-2.6",
  "level": "2",
  "url": "sec-topology.html#def-2.6",
  "type": "Example",
  "number": "2.1.3",
  "title": "Examples of Topologies and Topological Spaces:.",
  "body": "Examples of Topologies and Topological Spaces:      Indiscrete topology on a set .    Discrete topology on a set the set of all subsets of .    Euclidean topology on , where is the ball of radius centered at (and is Euclidean distance).    Euclidean topology relative to a subset .    Finite complement topology on a set .    Included point topology on a set with included point .    Excluded point topology on a set with excluded point .    Infinite ray topology on .    Preimage topology constructed on a set from a function and a topology on .    Line with two origins with set and topology .    On the finite set .      "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "sec-topology.html#remark-2",
  "type": "Remark",
  "number": "2.1.4",
  "title": "",
  "body": "  "
},
{
  "id": "lem-2.7",
  "level": "2",
  "url": "sec-topology.html#lem-2.7",
  "type": "Proposition",
  "number": "2.1.5",
  "title": "",
  "body": "  All of the examples in are topologies.   "
},
{
  "id": "def-2.9",
  "level": "2",
  "url": "sec-topology.html#def-2.9",
  "type": "Definition",
  "number": "2.1.6",
  "title": "Courser and Finer Topologies.",
  "body": "Courser and Finer Topologies   Let and be topologies on a set . If , then the topology is called smaller or coarser than , and the topology is called larger or finer than .   "
},
{
  "id": "example-11",
  "level": "2",
  "url": "sec-topology.html#example-11",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": "  "
},
{
  "id": "def-2.20",
  "level": "2",
  "url": "sec-topology.html#def-2.20",
  "type": "Definition",
  "number": "2.1.8",
  "title": "Continuous Function.",
  "body": "Continuous Function   Let and be topological spaces, and let be a function. The function is continuous if and only if for every open set in , the preimage is open in .   "
},
{
  "id": "example-12",
  "level": "2",
  "url": "sec-topology.html#example-12",
  "type": "Example",
  "number": "2.1.9",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-2.21",
  "level": "2",
  "url": "sec-topology.html#thm-2.21",
  "type": "Theorem",
  "number": "2.1.10",
  "title": "CC0.",
  "body": "CC0      Let be a real number. The function defined by for all is continuous.    The functions from to defined by addition, subtraction, and multiplication are continuous.    The function defined by is continuous.    A uniform limit of continuous functions from to is continuous; hence sine and cosine are continuous.      "
},
{
  "id": "thm-2.22",
  "level": "2",
  "url": "sec-topology.html#thm-2.22",
  "type": "Theorem",
  "number": "2.1.11",
  "title": "",
  "body": "    CC1  If and are topological spaces and is a constant function, then is continuous.   CC2  If and are continuous, then the composition is continuous.      "
},
{
  "id": "example-13",
  "level": "2",
  "url": "sec-topology.html#example-13",
  "type": "Example",
  "number": "2.1.12",
  "title": "",
  "body": "                       "
},
{
  "id": "thm-2.23",
  "level": "2",
  "url": "sec-topology.html#thm-2.23",
  "type": "Theorem",
  "number": "2.1.13",
  "title": "",
  "body": "  Let and be topological spaces and let . The function is continuous if and only if for all and , there exist with and .       "
},
{
  "id": "def-2.25",
  "level": "2",
  "url": "sec-topology.html#def-2.25",
  "type": "Definition",
  "number": "2.1.14",
  "title": "Homeomorphism.",
  "body": "Homeomorphism   Let and be topological spaces. A function is a homeomorphism if is a continuous bijection and is also continuous. The spaces and are called homeomorphic , or topologically equivalent, if there is a homeomorphism from to ; in symbols this is written .   "
},
{
  "id": "thm-2.26",
  "level": "2",
  "url": "sec-topology.html#thm-2.26",
  "type": "Theorem",
  "number": "2.1.15",
  "title": "",
  "body": "  \"Homeomorphic\" is an equivalence relation on topological spaces.   "
},
{
  "id": "def-2.28",
  "level": "2",
  "url": "sec-topology.html#def-2.28",
  "type": "Definition",
  "number": "2.1.16",
  "title": "Homeomorphism Problem.",
  "body": "Homeomorphism Problem   The Homeomorphism Problem asks: Is there a computer algorithm that, upon input of two topological spaces and , can determine whether or not ?   "
},
{
  "id": "example-14",
  "level": "2",
  "url": "sec-topology.html#example-14",
  "type": "Example",
  "number": "2.1.17",
  "title": "",
  "body": "  "
},
{
  "id": "def-2.30",
  "level": "2",
  "url": "sec-topology.html#def-2.30",
  "type": "Definition",
  "number": "2.1.18",
  "title": "Basis.",
  "body": "Basis   A basis on a set is a collection of subsets of satisfying:   For each in there is an in such that , and    whenever are in and is an element of , then there is an in such that .      "
},
{
  "id": "def-2.31",
  "level": "2",
  "url": "sec-topology.html#def-2.31",
  "type": "Definition",
  "number": "2.1.19",
  "title": "Topology Generated by a Basis.",
  "body": "Topology Generated by a Basis   The topology generated by a basis is .   "
},
{
  "id": "lem-2.32",
  "level": "2",
  "url": "sec-topology.html#lem-2.32",
  "type": "Lemma",
  "number": "2.1.20",
  "title": "",
  "body": "     If is a basis on , then is a topology on .    If is a topology on , then is also a basis on , and .      "
},
{
  "id": "example-15",
  "level": "2",
  "url": "sec-topology.html#example-15",
  "type": "Example",
  "number": "2.1.21",
  "title": "",
  "body": "   "
},
{
  "id": "thm-2.33",
  "level": "2",
  "url": "sec-topology.html#thm-2.33",
  "type": "Theorem",
  "number": "2.1.22",
  "title": "",
  "body": "  If is a basis on and , then is in if and only if is a union of elements of . That is, .   "
},
{
  "id": "def-2.36",
  "level": "2",
  "url": "sec-topology.html#def-2.36",
  "type": "Example",
  "number": "2.1.23",
  "title": "The Euclidean Basis.",
  "body": "The Euclidean Basis  The Euclidean basis on is .  "
},
{
  "id": "lem-2.37",
  "level": "2",
  "url": "sec-topology.html#lem-2.37",
  "type": "Lemma",
  "number": "2.1.24",
  "title": "",
  "body": "   .   "
},
{
  "id": "def-2.39",
  "level": "2",
  "url": "sec-topology.html#def-2.39",
  "type": "Definition",
  "number": "2.1.25",
  "title": "Lower Limit Topology.",
  "body": "Lower Limit Topology   The lower limit topology on the set is the topology generated by the basis .   "
},
{
  "id": "thm-2.40",
  "level": "2",
  "url": "sec-topology.html#thm-2.40",
  "type": "Theorem",
  "number": "2.1.26",
  "title": "",
  "body": "  Let be a basis on a set . A function is continuous if and only if for every basis element , the preimage is open in .   "
},
{
  "id": "thm-2.42",
  "level": "2",
  "url": "sec-topology.html#thm-2.42",
  "type": "Theorem",
  "number": "2.1.27",
  "title": "",
  "body": "  Let and be bases on a set . Then iff for all in and in , there is an in with .   "
},
{
  "id": "def-2.44",
  "level": "2",
  "url": "sec-topology.html#def-2.44",
  "type": "Definition",
  "number": "2.1.28",
  "title": "Subbasis.",
  "body": "Subbasis   A subbasis on a set is a collection of subsets of satisfying .   "
},
{
  "id": "thm-2.45",
  "level": "2",
  "url": "sec-topology.html#thm-2.45",
  "type": "Definition",
  "number": "2.1.29",
  "title": "",
  "body": "  The basis generated by a subbasis is . The topology generated by a subbasis is .   "
},
{
  "id": "example-17",
  "level": "2",
  "url": "sec-topology.html#example-17",
  "type": "Example",
  "number": "2.1.30",
  "title": "",
  "body": "  "
},
{
  "id": "thm-2.46",
  "level": "2",
  "url": "sec-topology.html#thm-2.46",
  "type": "Theorem",
  "number": "2.1.31",
  "title": "",
  "body": "  Let be a subbasis on a set .   The basis generated by the subbasis is a basis, and hence the topology generated by the subbasis is a topology.    A function is continuous if and only if for every subbasis element , the preimage is open in .      "
},
{
  "id": "sec-constructions",
  "level": "1",
  "url": "sec-constructions.html",
  "type": "Section",
  "number": "2.2",
  "title": "Constructing New Spaces and Continuous Functions from Old Ones",
  "body": "Constructing New Spaces and Continuous Functions from Old Ones     Construction is a matter of optimism; it's a matter of facing the future with confidence.   Cesar Pelli    Subspaces  Subspace Topology   Let be a topological space and let be a subset of . The subspace topology on is . The set with the subspace topology is called a subspace of . An element of the subspace topology on is called open in or open set relative to or open rel .        \"Open in \" does not mean open and contained in .    In mathematical writing, always specify \"open in__\", never write just \"open\".        The subspace topology is a topology.       CC3   If is a subspace of , then the inclusion map is continuous.      If is a subspace of and is a subspace of then is a subspace of .      Given a topological space with topology generated by a basis , and given and , the subspace topology on equals the topology generated by the basis .    Restrictions and Extensions   Let and be sets, let be a subset of , let be a set containing , and let be a function.   The restriction of to the domain is the function defined by for all a \\in .    The extension of to the codomain is defined by for all .    If is a subset of containing the image of , then the restriction of to the codomain is the function defined by for all .       Restrictions and Extensions of Continuous Functions are Continuous   Let and be topological spaces, let be a subspace of , and let be a subspace of .  CC4  The inclusion is continuous.   CC5  If Y is continuous, then is continuous.   CC6  If is continuous and , then is continuous.   CC7  If is continuous then is continuous.       CC8   Let be a topological space and suppose that with each open in . Let each have the subspace topology from . If is a function satisfying is continuous for all , then is continuous.    Embedding   An embedding of a topological space in a topological space is a map such that the restriction of to the codomain , with the subspace topology on from , is a homeomorphism.      If is a subspace of , then the inclusion map is an imbedding.      Examples of homeomorphic Euclidean subspaces     Product spaces  Product Topology and Box Topology   Let be a topological space for each index , and let be the Cartesian product of the spaces . For each index , let be the projection map.   The product topology on is the topology generated by the product subbasis . The set with the product topology is called a product space .    The box topology on is the topology generated by the box basis .            The product subbasis is a subbasis.    The box basis is a basis.    For a collection of spaces for , , and if is finite then .               For a collection of spaces the product topology on equals the product generated by the basis . (The collection is called the product basis.)    CC9   Let be a topological space for each index , and let have the product topology. Then for each index , the projection map : is continuous.         Let . Let be the Euclidean topology on , and let be the product topology on induced by the Euclidean topology on each of the factors. Then .       CC10   Let be a topological space for each index in an index set , and let have the product topology. Let , and for each , let be an (particular choice of) element of . Then the associated product inclusion map is an imbedding.    Product Function   Let be a set, and for each in an index set let be a set and let . The product function is defined by for all .      Let be a set, and for each let be a set. Then:   Each function is a product function such that is defined by for each index .    Given functions for each , the product function satisfies for all .       CC11   Let be a topological space, and for each index let be a topological space. Let have the product topology and let . Then is continuous if and only if is continuous for all .         Let be a subspace of a space for all . Let be the product topology on . Let be the subspace topology on induced by the product topology on . Then \\ .     Quotient = identification spaces  Quotient Topology   Let be a topological space and let be an equivalence relation on . Let be the set of equivalence classes and let be the equivalence map (defined by for all in ). The quotient topology , or identification topology on induced by , is the topology . The set together with the quotient topology is called a quotient space of , and the equivalence map is called the quotient map induced by  .      The quotient topology is a topology.        CC12-i  If is a quotient space of and is the equivalence map (defined by for all ), then is a continuous surjection.    The quotient topology induced by an equivalence relation is the largest topology on the set of equivalence classes for which the equivalence map is continuous.       Induced Quotient Topology   Let be a topological space, let be a set, and let be a surjective function. The quotient topology on induced by  is . If has the quotient topology induced by then is called a quotient map .      The quotient topology induced by a function is a topology.        CC12-ii  If is a quotient map, then is a continuous surjection.    The quotient topology induced by a map is the largest topology on the codomain of for which the map is continuous.         Let be a topological space.   If is an equivalence relation on , then the quotient topology on induced by equals the quotient topology on induced by the equivalence map (defined by for all ).    If is a surjection, then the quotient space is homeomorphic to the quotient space induced by the equivalence relation on defined by if and only if for all ; moreover, the homeomorphism satisfies , where is the equivalence map.         Examples     -dimensional examples: Quotients of a line segment :    Let have the Euclidean subspace topology, and let be the equivalence relation on defined by if and only if either or . Then the quotient space is isomorphic to .    -dimensional (surface) examples: Quotients of the square :   Let have the product topology (where each has the Euclidean subspace topology).   The torus is the quotient space where is the equivalence relation on generated by and for all .      The Klein bottle is the quotient space where is the equivalence relation on generated by and for all .      The Mobius band is the quotient space where is the equivalence relation on generated by for all .         The projective plane is the quotient space where is the -sphere (with the Euclidean subspace topology) and is the equivalence relation generated by ) for all .      Let have the product topology (where each has the Euclidean subspace topology).   The cylinder is homeomorphic to the quotient space where is the equivalence relation on generated by for all .    The projective plane is homeomorphic to the quotient space where is the equivalence relation on generated by and for all .    The -sphere is homeomorphic to the quotient space where is the equivalence relation on generated by and for all .    The torus is homeomorphic to the product space where each has the Euclidean subspace topology.       CC13 and CQ1: CFBT = \"Continuous Function Building Theorem for quotient spaces\"   Let and be topological spaces, let be an equivalence relation on , let be the equivalence map, and let have the quotient topology. Suppose that is a continuous function that is constant on equivalence classes. Then:   The map induces a continuous function with .    If is onto then is onto.    If is a quotient map, then is a quotient map.    If implies for all ] then is one-to-one.    If is a quotient map and (3) holds then is a homeomorphism.         Let and be topological spaces. An open map from to is a function such that for every open set in , the image is open in .        CO1  A composition of open functions is open.   CO2  If has the topology for each , and has the product topology, then the projection map is open.    If is an open function and if is a subspace of satisfying , then is an open map.   CO3  A finite product of open maps is open.       CQ2   If is continuous, onto, and open, then is a quotient map.      There exist quotient maps that are not open maps.      A retraction of a topological space to a subspace is a continuous function satisfying for all .    CQ3   Every retraction is a quotient map.      Let and be topological spaces with . The disjoint union topology on is .      Let and be disjoint topological spaces, let be a subspace of for each , and let be a continuous function. The disjoint union of and glued along , denoted is defined to be the quotient of the disjoint union space associated to the the smallest equivalence relation such that for all in .      If is a subspace of for and is continuous, then the function defined by (for all ) is an embedding.      Let be a topological space, let be an open set in , and let be an equivalence relation on satisfying the property that for each , the equivalence class of a satisfies . If has the subspace topology and has the quotient topology, then the function defined by for all is an embedding.      Let be a topological space, let be an equivalence relation on , and let be the quotient map. Let be a subspace of and let have the subspace topology in .   The relation on defined by if and only if for all is an equivalence relation on .    If and is either an open or closed subset of , then the the function is a quotient map and the function defined by for all is a homeomorphism.        "
},
{
  "id": "def-2.50",
  "level": "2",
  "url": "sec-constructions.html#def-2.50",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Subspace Topology.",
  "body": "Subspace Topology   Let be a topological space and let be a subset of . The subspace topology on is . The set with the subspace topology is called a subspace of . An element of the subspace topology on is called open in or open set relative to or open rel .   "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "sec-constructions.html#remark-3",
  "type": "Remark",
  "number": "2.2.2",
  "title": "",
  "body": "    \"Open in \" does not mean open and contained in .    In mathematical writing, always specify \"open in__\", never write just \"open\".     "
},
{
  "id": "prop-2.51",
  "level": "2",
  "url": "sec-constructions.html#prop-2.51",
  "type": "Proposition",
  "number": "2.2.3",
  "title": "",
  "body": "  The subspace topology is a topology.   "
},
{
  "id": "example-18",
  "level": "2",
  "url": "sec-constructions.html#example-18",
  "type": "Example",
  "number": "2.2.4",
  "title": "",
  "body": "  "
},
{
  "id": "thm-2.54",
  "level": "2",
  "url": "sec-constructions.html#thm-2.54",
  "type": "Theorem",
  "number": "2.2.5",
  "title": "CC3.",
  "body": "CC3   If is a subspace of , then the inclusion map is continuous.   "
},
{
  "id": "thm-2.56",
  "level": "2",
  "url": "sec-constructions.html#thm-2.56",
  "type": "Theorem",
  "number": "2.2.6",
  "title": "",
  "body": "  If is a subspace of and is a subspace of then is a subspace of .   "
},
{
  "id": "prop-2.57",
  "level": "2",
  "url": "sec-constructions.html#prop-2.57",
  "type": "Proposition",
  "number": "2.2.7",
  "title": "",
  "body": "  Given a topological space with topology generated by a basis , and given and , the subspace topology on equals the topology generated by the basis .   "
},
{
  "id": "def-2.59",
  "level": "2",
  "url": "sec-constructions.html#def-2.59",
  "type": "Definition",
  "number": "2.2.8",
  "title": "Restrictions and Extensions.",
  "body": "Restrictions and Extensions   Let and be sets, let be a subset of , let be a set containing , and let be a function.   The restriction of to the domain is the function defined by for all a \\in .    The extension of to the codomain is defined by for all .    If is a subset of containing the image of , then the restriction of to the codomain is the function defined by for all .      "
},
{
  "id": "thm-2.60",
  "level": "2",
  "url": "sec-constructions.html#thm-2.60",
  "type": "Theorem",
  "number": "2.2.9",
  "title": "Restrictions and Extensions of Continuous Functions are Continuous.",
  "body": "Restrictions and Extensions of Continuous Functions are Continuous   Let and be topological spaces, let be a subspace of , and let be a subspace of .  CC4  The inclusion is continuous.   CC5  If Y is continuous, then is continuous.   CC6  If is continuous and , then is continuous.   CC7  If is continuous then is continuous.      "
},
{
  "id": "thm-2.62",
  "level": "2",
  "url": "sec-constructions.html#thm-2.62",
  "type": "Theorem",
  "number": "2.2.10",
  "title": "CC8.",
  "body": "CC8   Let be a topological space and suppose that with each open in . Let each have the subspace topology from . If is a function satisfying is continuous for all , then is continuous.   "
},
{
  "id": "def-2.64",
  "level": "2",
  "url": "sec-constructions.html#def-2.64",
  "type": "Definition",
  "number": "2.2.11",
  "title": "Embedding.",
  "body": "Embedding   An embedding of a topological space in a topological space is a map such that the restriction of to the codomain , with the subspace topology on from , is a homeomorphism.   "
},
{
  "id": "cor-2.65",
  "level": "2",
  "url": "sec-constructions.html#cor-2.65",
  "type": "Corollary",
  "number": "2.2.12",
  "title": "",
  "body": "  If is a subspace of , then the inclusion map is an imbedding.   "
},
{
  "id": "example-19",
  "level": "2",
  "url": "sec-constructions.html#example-19",
  "type": "Example",
  "number": "2.2.13",
  "title": "",
  "body": "  Examples of homeomorphic Euclidean subspaces   "
},
{
  "id": "def-2.70",
  "level": "2",
  "url": "sec-constructions.html#def-2.70",
  "type": "Definition",
  "number": "2.2.14",
  "title": "Product Topology and Box Topology.",
  "body": "Product Topology and Box Topology   Let be a topological space for each index , and let be the Cartesian product of the spaces . For each index , let be the projection map.   The product topology on is the topology generated by the product subbasis . The set with the product topology is called a product space .    The box topology on is the topology generated by the box basis .      "
},
{
  "id": "prop-2.71",
  "level": "2",
  "url": "sec-constructions.html#prop-2.71",
  "type": "Proposition",
  "number": "2.2.15",
  "title": "",
  "body": "     The product subbasis is a subbasis.    The box basis is a basis.    For a collection of spaces for , , and if is finite then .      "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "sec-constructions.html#remark-4",
  "type": "Remark",
  "number": "2.2.16",
  "title": "",
  "body": "  "
},
{
  "id": "example-20",
  "level": "2",
  "url": "sec-constructions.html#example-20",
  "type": "Example",
  "number": "2.2.17",
  "title": "",
  "body": "  "
},
{
  "id": "prop-2.73",
  "level": "2",
  "url": "sec-constructions.html#prop-2.73",
  "type": "Proposition",
  "number": "2.2.18",
  "title": "",
  "body": "  For a collection of spaces the product topology on equals the product generated by the basis . (The collection is called the product basis.)   "
},
{
  "id": "prop-2.75",
  "level": "2",
  "url": "sec-constructions.html#prop-2.75",
  "type": "Proposition",
  "number": "2.2.19",
  "title": "CC9.",
  "body": "CC9   Let be a topological space for each index , and let have the product topology. Then for each index , the projection map : is continuous.   "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "sec-constructions.html#remark-5",
  "type": "Remark",
  "number": "2.2.20",
  "title": "",
  "body": "  "
},
{
  "id": "thm-2.78",
  "level": "2",
  "url": "sec-constructions.html#thm-2.78",
  "type": "Theorem",
  "number": "2.2.21",
  "title": "",
  "body": "  Let . Let be the Euclidean topology on , and let be the product topology on induced by the Euclidean topology on each of the factors. Then .   "
},
{
  "id": "example-21",
  "level": "2",
  "url": "sec-constructions.html#example-21",
  "type": "Example",
  "number": "2.2.22",
  "title": "",
  "body": "  "
},
{
  "id": "thm-2.80",
  "level": "2",
  "url": "sec-constructions.html#thm-2.80",
  "type": "Theorem",
  "number": "2.2.23",
  "title": "CC10.",
  "body": "CC10   Let be a topological space for each index in an index set , and let have the product topology. Let , and for each , let be an (particular choice of) element of . Then the associated product inclusion map is an imbedding.   "
},
{
  "id": "def-2.82",
  "level": "2",
  "url": "sec-constructions.html#def-2.82",
  "type": "Definition",
  "number": "2.2.24",
  "title": "Product Function.",
  "body": "Product Function   Let be a set, and for each in an index set let be a set and let . The product function is defined by for all .   "
},
{
  "id": "lem-2.83",
  "level": "2",
  "url": "sec-constructions.html#lem-2.83",
  "type": "Lemma",
  "number": "2.2.25",
  "title": "",
  "body": "  Let be a set, and for each let be a set. Then:   Each function is a product function such that is defined by for each index .    Given functions for each , the product function satisfies for all .      "
},
{
  "id": "thm-2.84",
  "level": "2",
  "url": "sec-constructions.html#thm-2.84",
  "type": "Theorem",
  "number": "2.2.26",
  "title": "CC11.",
  "body": "CC11   Let be a topological space, and for each index let be a topological space. Let have the product topology and let . Then is continuous if and only if is continuous for all .   "
},
{
  "id": "example-22",
  "level": "2",
  "url": "sec-constructions.html#example-22",
  "type": "Example",
  "number": "2.2.27",
  "title": "",
  "body": "  "
},
{
  "id": "thm-2.87",
  "level": "2",
  "url": "sec-constructions.html#thm-2.87",
  "type": "Theorem",
  "number": "2.2.28",
  "title": "",
  "body": "  Let be a subspace of a space for all . Let be the product topology on . Let be the subspace topology on induced by the product topology on . Then \\ .   "
},
{
  "id": "def-2.90",
  "level": "2",
  "url": "sec-constructions.html#def-2.90",
  "type": "Definition",
  "number": "2.2.29",
  "title": "Quotient Topology.",
  "body": "Quotient Topology   Let be a topological space and let be an equivalence relation on . Let be the set of equivalence classes and let be the equivalence map (defined by for all in ). The quotient topology , or identification topology on induced by , is the topology . The set together with the quotient topology is called a quotient space of , and the equivalence map is called the quotient map induced by  .   "
},
{
  "id": "prop-2.92",
  "level": "2",
  "url": "sec-constructions.html#prop-2.92",
  "type": "Proposition",
  "number": "2.2.30",
  "title": "",
  "body": "  The quotient topology is a topology.   "
},
{
  "id": "prop-2.93",
  "level": "2",
  "url": "sec-constructions.html#prop-2.93",
  "type": "Proposition",
  "number": "2.2.31",
  "title": "",
  "body": "    CC12-i  If is a quotient space of and is the equivalence map (defined by for all ), then is a continuous surjection.    The quotient topology induced by an equivalence relation is the largest topology on the set of equivalence classes for which the equivalence map is continuous.      "
},
{
  "id": "def-2.95",
  "level": "2",
  "url": "sec-constructions.html#def-2.95",
  "type": "Definition",
  "number": "2.2.32",
  "title": "Induced Quotient Topology.",
  "body": "Induced Quotient Topology   Let be a topological space, let be a set, and let be a surjective function. The quotient topology on induced by  is . If has the quotient topology induced by then is called a quotient map .   "
},
{
  "id": "prop-2.97",
  "level": "2",
  "url": "sec-constructions.html#prop-2.97",
  "type": "Proposition",
  "number": "2.2.33",
  "title": "",
  "body": "  The quotient topology induced by a function is a topology.   "
},
{
  "id": "prop-2.98",
  "level": "2",
  "url": "sec-constructions.html#prop-2.98",
  "type": "Proposition",
  "number": "2.2.34",
  "title": "",
  "body": "    CC12-ii  If is a quotient map, then is a continuous surjection.    The quotient topology induced by a map is the largest topology on the codomain of for which the map is continuous.      "
},
{
  "id": "prop-2.100",
  "level": "2",
  "url": "sec-constructions.html#prop-2.100",
  "type": "Proposition",
  "number": "2.2.35",
  "title": "",
  "body": "  Let be a topological space.   If is an equivalence relation on , then the quotient topology on induced by equals the quotient topology on induced by the equivalence map (defined by for all ).    If is a surjection, then the quotient space is homeomorphic to the quotient space induced by the equivalence relation on defined by if and only if for all ; moreover, the homeomorphism satisfies , where is the equivalence map.      "
},
{
  "id": "example-23",
  "level": "2",
  "url": "sec-constructions.html#example-23",
  "type": "Example",
  "number": "2.2.36",
  "title": "",
  "body": "  Examples   "
},
{
  "id": "thm-2.104",
  "level": "2",
  "url": "sec-constructions.html#thm-2.104",
  "type": "Theorem",
  "number": "2.2.37",
  "title": "",
  "body": "  Let have the Euclidean subspace topology, and let be the equivalence relation on defined by if and only if either or . Then the quotient space is isomorphic to .   "
},
{
  "id": "def-2.106",
  "level": "2",
  "url": "sec-constructions.html#def-2.106",
  "type": "Definition",
  "number": "2.2.38",
  "title": "<span class=\"process-math\">\\(2\\)<\/span>-dimensional (surface) examples: Quotients of the square <span class=\"process-math\">\\([0,1] \\times [0,1]\\text{:}\\)<\/span>.",
  "body": "-dimensional (surface) examples: Quotients of the square :   Let have the product topology (where each has the Euclidean subspace topology).   The torus is the quotient space where is the equivalence relation on generated by and for all .      The Klein bottle is the quotient space where is the equivalence relation on generated by and for all .      The Mobius band is the quotient space where is the equivalence relation on generated by for all .      "
},
{
  "id": "def-2.108",
  "level": "2",
  "url": "sec-constructions.html#def-2.108",
  "type": "Definition",
  "number": "2.2.39",
  "title": "",
  "body": "  The projective plane is the quotient space where is the -sphere (with the Euclidean subspace topology) and is the equivalence relation generated by ) for all .   "
},
{
  "id": "thm-2.110",
  "level": "2",
  "url": "sec-constructions.html#thm-2.110",
  "type": "Theorem",
  "number": "2.2.40",
  "title": "",
  "body": "  Let have the product topology (where each has the Euclidean subspace topology).   The cylinder is homeomorphic to the quotient space where is the equivalence relation on generated by for all .    The projective plane is homeomorphic to the quotient space where is the equivalence relation on generated by and for all .    The -sphere is homeomorphic to the quotient space where is the equivalence relation on generated by and for all .    The torus is homeomorphic to the product space where each has the Euclidean subspace topology.      "
},
{
  "id": "thm-2.120",
  "level": "2",
  "url": "sec-constructions.html#thm-2.120",
  "type": "Theorem",
  "number": "2.2.41",
  "title": "CC13 and CQ1: CFBT = \"Continuous Function Building Theorem for quotient spaces\".",
  "body": "CC13 and CQ1: CFBT = \"Continuous Function Building Theorem for quotient spaces\"   Let and be topological spaces, let be an equivalence relation on , let be the equivalence map, and let have the quotient topology. Suppose that is a continuous function that is constant on equivalence classes. Then:   The map induces a continuous function with .    If is onto then is onto.    If is a quotient map, then is a quotient map.    If implies for all ] then is one-to-one.    If is a quotient map and (3) holds then is a homeomorphism.      "
},
{
  "id": "def-2.123",
  "level": "2",
  "url": "sec-constructions.html#def-2.123",
  "type": "Definition",
  "number": "2.2.42",
  "title": "",
  "body": "  Let and be topological spaces. An open map from to is a function such that for every open set in , the image is open in .   "
},
{
  "id": "prop-2.124",
  "level": "2",
  "url": "sec-constructions.html#prop-2.124",
  "type": "Proposition",
  "number": "2.2.43",
  "title": "",
  "body": "    CO1  A composition of open functions is open.   CO2  If has the topology for each , and has the product topology, then the projection map is open.    If is an open function and if is a subspace of satisfying , then is an open map.   CO3  A finite product of open maps is open.      "
},
{
  "id": "thm-2.126",
  "level": "2",
  "url": "sec-constructions.html#thm-2.126",
  "type": "Theorem",
  "number": "2.2.44",
  "title": "CQ2.",
  "body": "CQ2   If is continuous, onto, and open, then is a quotient map.   "
},
{
  "id": "prop-2.127",
  "level": "2",
  "url": "sec-constructions.html#prop-2.127",
  "type": "Proposition",
  "number": "2.2.45",
  "title": "",
  "body": "  There exist quotient maps that are not open maps.   "
},
{
  "id": "def-2.130",
  "level": "2",
  "url": "sec-constructions.html#def-2.130",
  "type": "Definition",
  "number": "2.2.46",
  "title": "",
  "body": "  A retraction of a topological space to a subspace is a continuous function satisfying for all .   "
},
{
  "id": "thm-2.131",
  "level": "2",
  "url": "sec-constructions.html#thm-2.131",
  "type": "Theorem",
  "number": "2.2.47",
  "title": "CQ3.",
  "body": "CQ3   Every retraction is a quotient map.   "
},
{
  "id": "def-2.134",
  "level": "2",
  "url": "sec-constructions.html#def-2.134",
  "type": "Definition",
  "number": "2.2.48",
  "title": "",
  "body": "  Let and be topological spaces with . The disjoint union topology on is .   "
},
{
  "id": "def-2.136",
  "level": "2",
  "url": "sec-constructions.html#def-2.136",
  "type": "Definition",
  "number": "2.2.49",
  "title": "",
  "body": "  Let and be disjoint topological spaces, let be a subspace of for each , and let be a continuous function. The disjoint union of and glued along , denoted is defined to be the quotient of the disjoint union space associated to the the smallest equivalence relation such that for all in .   "
},
{
  "id": "thm-2.137",
  "level": "2",
  "url": "sec-constructions.html#thm-2.137",
  "type": "Theorem",
  "number": "2.2.50",
  "title": "",
  "body": "  If is a subspace of for and is continuous, then the function defined by (for all ) is an embedding.   "
},
{
  "id": "thm-2.139",
  "level": "2",
  "url": "sec-constructions.html#thm-2.139",
  "type": "Theorem",
  "number": "2.2.51",
  "title": "",
  "body": "  Let be a topological space, let be an open set in , and let be an equivalence relation on satisfying the property that for each , the equivalence class of a satisfies . If has the subspace topology and has the quotient topology, then the function defined by for all is an embedding.   "
},
{
  "id": "thm-2.142",
  "level": "2",
  "url": "sec-constructions.html#thm-2.142",
  "type": "Theorem",
  "number": "2.2.52",
  "title": "",
  "body": "  Let be a topological space, let be an equivalence relation on , and let be the quotient map. Let be a subspace of and let have the subspace topology in .   The relation on defined by if and only if for all is an equivalence relation on .    If and is either an open or closed subset of , then the the function is a quotient map and the function defined by for all is a homeomorphism.      "
},
{
  "id": "sec-closed",
  "level": "1",
  "url": "sec-closed.html",
  "type": "Section",
  "number": "2.3",
  "title": "Closed Sets, Boundaries, and Continuity",
  "body": "Closed Sets, Boundaries, and Continuity     I prefer to see with closed eyes.   Josef Albers    Closed sets    A subset of a topological space is a closed set in if and only if is open in .      Let be a topological space. Then    and are closed in ;    whenever is closed in for all , then is closed in ; and    whenever are closed in , then is closed in .       Closed sets and continuity:    Let and be topological spaces and let . Then is continuous if and only for every closed set in , the preimage is closed in .    CC14 = \"Pasting Lemma\"   Let and be topological spaces, let and be closed subsets of , and let and have the subspace topologies inherited from . If satisfies that and are both continuous, then is continuous.     Examples   Closed sets and constructions:    If is a subspace of and is a subset of , then is closed in if and only if for some closed set in .      If is closed in and is closed in , then is closed in .     Closures, interiors, boundaries, and limit points    Let be a topological space and let .   The closure of in is the set .    The interior of in is the set .    The boundary of in is .        Examples     Let be a topological space and let and be subsets of .    is closed in and is open in .    If A \\sse B \\sse X, then \\text{Cl}_X(A) \\sse \\text{Cl}_X(B) and IntX(A) \\sse IntX(B).     is closed in iff and is open in iff .     is the smallest closed set in containing , and is the largest open set in contained in .       Interaction with continuity:    If and are topological spaces and , then is continuous if and only if for all , .    Interactions with constructions:    Let be a subspace of , and let be a subset of . Then .      Let be a topological space and let for all . Let have the product topology. Then .      Let be a topological space, let , and let .   The point if and only if every open set in that contains intersects .    If is the topology generated by a basis , then if and only if every basis element containing intersects .         Let be a topological space, let , and let . The point is a limit point of in if and only if for every open set in containing , the set . The set of limit points of in is denoted .     Examples     Let be a topological space, let , and let . Then if and only if .      Let be a topological space and let . Then .     "
},
{
  "id": "def-2.150",
  "level": "2",
  "url": "sec-closed.html#def-2.150",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  A subset of a topological space is a closed set in if and only if is open in .   "
},
{
  "id": "thm-2.151",
  "level": "2",
  "url": "sec-closed.html#thm-2.151",
  "type": "Theorem",
  "number": "2.3.2",
  "title": "",
  "body": "  Let be a topological space. Then    and are closed in ;    whenever is closed in for all , then is closed in ; and    whenever are closed in , then is closed in .      "
},
{
  "id": "thm-2.154",
  "level": "2",
  "url": "sec-closed.html#thm-2.154",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "",
  "body": "  Let and be topological spaces and let . Then is continuous if and only for every closed set in , the preimage is closed in .   "
},
{
  "id": "thm-2.155",
  "level": "2",
  "url": "sec-closed.html#thm-2.155",
  "type": "Theorem",
  "number": "2.3.4",
  "title": "CC14 = \"Pasting Lemma\".",
  "body": "CC14 = \"Pasting Lemma\"   Let and be topological spaces, let and be closed subsets of , and let and have the subspace topologies inherited from . If satisfies that and are both continuous, then is continuous.   "
},
{
  "id": "example-24",
  "level": "2",
  "url": "sec-closed.html#example-24",
  "type": "Example",
  "number": "2.3.5",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-2.160",
  "level": "2",
  "url": "sec-closed.html#thm-2.160",
  "type": "Theorem",
  "number": "2.3.6",
  "title": "",
  "body": "  If is a subspace of and is a subset of , then is closed in if and only if for some closed set in .   "
},
{
  "id": "thm-2.162",
  "level": "2",
  "url": "sec-closed.html#thm-2.162",
  "type": "Theorem",
  "number": "2.3.7",
  "title": "",
  "body": "  If is closed in and is closed in , then is closed in .   "
},
{
  "id": "def-2.170",
  "level": "2",
  "url": "sec-closed.html#def-2.170",
  "type": "Definition",
  "number": "2.3.8",
  "title": "",
  "body": "  Let be a topological space and let .   The closure of in is the set .    The interior of in is the set .    The boundary of in is .      "
},
{
  "id": "example-25",
  "level": "2",
  "url": "sec-closed.html#example-25",
  "type": "Example",
  "number": "2.3.9",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-2.172",
  "level": "2",
  "url": "sec-closed.html#thm-2.172",
  "type": "Theorem",
  "number": "2.3.10",
  "title": "",
  "body": "  Let be a topological space and let and be subsets of .    is closed in and is open in .    If A \\sse B \\sse X, then \\text{Cl}_X(A) \\sse \\text{Cl}_X(B) and IntX(A) \\sse IntX(B).     is closed in iff and is open in iff .     is the smallest closed set in containing , and is the largest open set in contained in .      "
},
{
  "id": "thm-2.174",
  "level": "2",
  "url": "sec-closed.html#thm-2.174",
  "type": "Theorem",
  "number": "2.3.11",
  "title": "",
  "body": "  If and are topological spaces and , then is continuous if and only if for all , .   "
},
{
  "id": "thm-2.180",
  "level": "2",
  "url": "sec-closed.html#thm-2.180",
  "type": "Theorem",
  "number": "2.3.12",
  "title": "",
  "body": "  Let be a subspace of , and let be a subset of . Then .   "
},
{
  "id": "thm-2.182",
  "level": "2",
  "url": "sec-closed.html#thm-2.182",
  "type": "Theorem",
  "number": "2.3.13",
  "title": "",
  "body": "  Let be a topological space and let for all . Let have the product topology. Then .   "
},
{
  "id": "thm-2.185",
  "level": "2",
  "url": "sec-closed.html#thm-2.185",
  "type": "Theorem",
  "number": "2.3.14",
  "title": "",
  "body": "  Let be a topological space, let , and let .   The point if and only if every open set in that contains intersects .    If is the topology generated by a basis , then if and only if every basis element containing intersects .      "
},
{
  "id": "def-2.190",
  "level": "2",
  "url": "sec-closed.html#def-2.190",
  "type": "Definition",
  "number": "2.3.15",
  "title": "",
  "body": "  Let be a topological space, let , and let . The point is a limit point of in if and only if for every open set in containing , the set . The set of limit points of in is denoted .   "
},
{
  "id": "example-26",
  "level": "2",
  "url": "sec-closed.html#example-26",
  "type": "Example",
  "number": "2.3.16",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-2.191",
  "level": "2",
  "url": "sec-closed.html#thm-2.191",
  "type": "Theorem",
  "number": "2.3.17",
  "title": "",
  "body": "  Let be a topological space, let , and let . Then if and only if .   "
},
{
  "id": "thm-2.193",
  "level": "2",
  "url": "sec-closed.html#thm-2.193",
  "type": "Theorem",
  "number": "2.3.18",
  "title": "",
  "body": "  Let be a topological space and let . Then .   "
},
{
  "id": "sec-motivation",
  "level": "1",
  "url": "sec-motivation.html",
  "type": "Section",
  "number": "3.1",
  "title": "Motivation and Hausdorff",
  "body": "Motivation and Hausdorff    Some things never change.   Bruce Hornsby     A property of topological spaces is a homeomorphism invariant if whenever and are homeomorphic topological spaces and has property , then has property .     Use homeomorphism invariants to prove two spaces are NOT homeomorphic.     A space is a finite topological space if the set is finite.      A topological space is (or Hausdorff) if for every pair of points with , there exist open sets such that , and .     Examples      is a homeomorphism invariant.    Interactions with constructions and continuous functions:       If is a space and is a subspace of , then is .    If is a space for all then the product space is .         is not preserved by quotients, continuous images, or continuous preimages.      Let be a topological space and let . Then is closed in .    "
},
{
  "id": "def-3.1",
  "level": "2",
  "url": "sec-motivation.html#def-3.1",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  A property of topological spaces is a homeomorphism invariant if whenever and are homeomorphic topological spaces and has property , then has property .   "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "sec-motivation.html#remark-6",
  "type": "Remark",
  "number": "3.1.2",
  "title": "",
  "body": " Use homeomorphism invariants to prove two spaces are NOT homeomorphic.  "
},
{
  "id": "def-3.6",
  "level": "2",
  "url": "sec-motivation.html#def-3.6",
  "type": "Definition",
  "number": "3.1.3",
  "title": "",
  "body": "  A space is a finite topological space if the set is finite.   "
},
{
  "id": "def-3.7",
  "level": "2",
  "url": "sec-motivation.html#def-3.7",
  "type": "Definition",
  "number": "3.1.4",
  "title": "",
  "body": "  A topological space is (or Hausdorff) if for every pair of points with , there exist open sets such that , and .   "
},
{
  "id": "example-27",
  "level": "2",
  "url": "sec-motivation.html#example-27",
  "type": "Example",
  "number": "3.1.5",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-3.8",
  "level": "2",
  "url": "sec-motivation.html#thm-3.8",
  "type": "Theorem",
  "number": "3.1.6",
  "title": "",
  "body": "   is a homeomorphism invariant.   "
},
{
  "id": "prop-3.10",
  "level": "2",
  "url": "sec-motivation.html#prop-3.10",
  "type": "Proposition",
  "number": "3.1.7",
  "title": "",
  "body": "     If is a space and is a subspace of , then is .    If is a space for all then the product space is .      "
},
{
  "id": "remark-7",
  "level": "2",
  "url": "sec-motivation.html#remark-7",
  "type": "Remark",
  "number": "3.1.8",
  "title": "",
  "body": "  is not preserved by quotients, continuous images, or continuous preimages.  "
},
{
  "id": "thm-3.13",
  "level": "2",
  "url": "sec-motivation.html#thm-3.13",
  "type": "Theorem",
  "number": "3.1.9",
  "title": "",
  "body": "  Let be a topological space and let . Then is closed in .   "
},
{
  "id": "sec-metric",
  "level": "1",
  "url": "sec-metric.html",
  "type": "Section",
  "number": "3.2",
  "title": "Metrizability",
  "body": "Metrizability    With a metric you can really go to town, otherwise it is just abstract nonsense.   Jennifer Tour Chayes     A metric on a set is a function satisfying the following for all :    , and if and only if .     .     .   The pair is a metric space, and for any the real number is the distance from to .      Let be a metric on a set . For any and with , the ball of radius centered at is .   The metric basis on induced by is the collection .    The metric topology on induced by is the topology generated by the metric basis.         Let be a metric space. The metric basis on is a basis, and hence the metric topology is a topology.      Let be a metric space, let have the metric topology, and let have the product topology. Then the metric function is continuous.     Examples     A topological space is metrizable if there is a metric on such that (where is the metric topology on induced by ).      Metrizability is a homeomorphism invariant.    Interactions with constructions and continuous functions:       If is a metrizable space and is a subspace of , then is metrizable.    If and are metrizable spaces, then the product space is metrizable.        Metrizability is not preserved by quotients, continuous images, or continuous preimages.    Interactions with homeomorphism invariants:    Metrizable spaces are .     "
},
{
  "id": "def-3.20",
  "level": "2",
  "url": "sec-metric.html#def-3.20",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": "  A metric on a set is a function satisfying the following for all :    , and if and only if .     .     .   The pair is a metric space, and for any the real number is the distance from to .   "
},
{
  "id": "def-3.22",
  "level": "2",
  "url": "sec-metric.html#def-3.22",
  "type": "Definition",
  "number": "3.2.2",
  "title": "",
  "body": "  Let be a metric on a set . For any and with , the ball of radius centered at is .   The metric basis on induced by is the collection .    The metric topology on induced by is the topology generated by the metric basis.      "
},
{
  "id": "prop-3.24",
  "level": "2",
  "url": "sec-metric.html#prop-3.24",
  "type": "Proposition",
  "number": "3.2.3",
  "title": "",
  "body": "  Let be a metric space. The metric basis on is a basis, and hence the metric topology is a topology.   "
},
{
  "id": "thm-3.25",
  "level": "2",
  "url": "sec-metric.html#thm-3.25",
  "type": "Theorem",
  "number": "3.2.4",
  "title": "",
  "body": "  Let be a metric space, let have the metric topology, and let have the product topology. Then the metric function is continuous.   "
},
{
  "id": "example-28",
  "level": "2",
  "url": "sec-metric.html#example-28",
  "type": "Example",
  "number": "3.2.5",
  "title": "",
  "body": " Examples  "
},
{
  "id": "def-3.27",
  "level": "2",
  "url": "sec-metric.html#def-3.27",
  "type": "Definition",
  "number": "3.2.6",
  "title": "",
  "body": "  A topological space is metrizable if there is a metric on such that (where is the metric topology on induced by ).   "
},
{
  "id": "thm-3.28",
  "level": "2",
  "url": "sec-metric.html#thm-3.28",
  "type": "Theorem",
  "number": "3.2.7",
  "title": "",
  "body": "  Metrizability is a homeomorphism invariant.   "
},
{
  "id": "prop-3.30",
  "level": "2",
  "url": "sec-metric.html#prop-3.30",
  "type": "Proposition",
  "number": "3.2.8",
  "title": "",
  "body": "     If is a metrizable space and is a subspace of , then is metrizable.    If and are metrizable spaces, then the product space is metrizable.      "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "sec-metric.html#remark-8",
  "type": "Remark",
  "number": "3.2.9",
  "title": "",
  "body": " Metrizability is not preserved by quotients, continuous images, or continuous preimages.  "
},
{
  "id": "thm-3.33",
  "level": "2",
  "url": "sec-metric.html#thm-3.33",
  "type": "Theorem",
  "number": "3.2.10",
  "title": "",
  "body": "  Metrizable spaces are .   "
},
{
  "id": "sec-connected",
  "level": "1",
  "url": "sec-connected.html",
  "type": "Section",
  "number": "3.3",
  "title": "Connectedness",
  "body": "Connectedness     Connection gives purpose and meaning to our lives.   Brené Brown    Connected  Motivation: Characterize spaces for which the Intermediate Value Theorem holds.    A topological space is connected if whenever and are open sets in satisfying and , then either or .      A disconnection of a space is a pair of nonempty disjoint open sets in whose union is .    IVT = Intermediate Value Theorem   Let be a connected space, and let be a continuous function. If and satifies , then there is an with .     Examples     A space is connected if and only if the subsets of that are both open and closed in are and .    Interactions with constructions and continuous functions:    A continuous image of a connected space is connected. That is, if are topological spaces, and if is connected and is a continuous function, then the subspace of is connected.      Connectedness is a homeomorphism invariant.      If is a connected space and is a quotient space, then is connected.      If and are connected spaces, then the product space is connected.     Connectedness is not preserved by subspaces or continuous preimages.     Let be a topological space and suppose that . If is a connected subspace of for all , then is connected.      If is a connected subspace of a space and if are a disconnection of , then either or .     Connectedness and Euclidean topology:    A subspace of is connected if and only if is either an interval, a ray, or .       and (with ) with the Euclidean topology are not homeomorphic.       Let and be topological spaces with , and let and . Let have the disjoint union topology. Define to be the minimal equivalence relation on such that , and let be the corresponding quotient space. Then:   There are embeddings and .    If and are connected, then is connected.        Path connected   Let denote the topological space with the Euclidean subspace topology.     Let be a topological space and let . A path in from to is a continuous function such that and .      A space is path-connected, or PC, if for all , there is a continuous function such that and (that is, there is a path from to ).     Examples   Interactions with constructions and continuous functions:    A continuous image of a path-connected space is path-connected.      Path-connectedness is a homeomorphism invariant.         If is a path-connected space for all , then the product space is path-connected.    If is a path-connected space and is an equivalence relation on , then the quotient space is path-connected.        Path-connectedness is not preserved by subspaces or continuous preimages.     Let be a topological space and suppose that and . If is PC subspace of for all , then is PC.     Interactions with homeomorphism invariants:    If is a path-connected space, then is connected.      The flea and comb space is the subset of with the Euclidean subspace topology. The point is the flea and the subspace is the comb.      Connectedness does not imply path-connectedness. In particular, the flea-and-comb space is connected but not path-connected.      A subspace of is path-connected iff is either an interval, ray, or .      Components    Let be a topological space, and let be the equivalence relation on defined by if and only if there is a connected subspace of with . A connected component of is an equivalence class for the relation .      Let be a topological space, and let be the equivalence relation on defined by if and only if there is a path in from to . A path component of is an equivalence class for the relation .     Examples      and are equivalence relations.      Let be a topological space. Then is a disjoint union of its connected components. Moreover, each connected component is a disjoint union of path components.         The number (cardinality) of connected components is a homeomorphism invariant.    The number (cardinality) of path components is a homeomorphism invariant.        "
},
{
  "id": "def-3.40",
  "level": "2",
  "url": "sec-connected.html#def-3.40",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "  A topological space is connected if whenever and are open sets in satisfying and , then either or .   "
},
{
  "id": "def-3.41",
  "level": "2",
  "url": "sec-connected.html#def-3.41",
  "type": "Definition",
  "number": "3.3.2",
  "title": "",
  "body": "  A disconnection of a space is a pair of nonempty disjoint open sets in whose union is .   "
},
{
  "id": "thm-3.44",
  "level": "2",
  "url": "sec-connected.html#thm-3.44",
  "type": "Theorem",
  "number": "3.3.3",
  "title": "IVT = Intermediate Value Theorem.",
  "body": "IVT = Intermediate Value Theorem   Let be a connected space, and let be a continuous function. If and satifies , then there is an with .   "
},
{
  "id": "example-29",
  "level": "2",
  "url": "sec-connected.html#example-29",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-3.46",
  "level": "2",
  "url": "sec-connected.html#thm-3.46",
  "type": "Theorem",
  "number": "3.3.5",
  "title": "",
  "body": "  A space is connected if and only if the subsets of that are both open and closed in are and .   "
},
{
  "id": "thm-3.49",
  "level": "2",
  "url": "sec-connected.html#thm-3.49",
  "type": "Theorem",
  "number": "3.3.6",
  "title": "",
  "body": "  A continuous image of a connected space is connected. That is, if are topological spaces, and if is connected and is a continuous function, then the subspace of is connected.   "
},
{
  "id": "cor-3.50",
  "level": "2",
  "url": "sec-connected.html#cor-3.50",
  "type": "Corollary",
  "number": "3.3.7",
  "title": "",
  "body": "  Connectedness is a homeomorphism invariant.   "
},
{
  "id": "cor-3.51",
  "level": "2",
  "url": "sec-connected.html#cor-3.51",
  "type": "Corollary",
  "number": "3.3.8",
  "title": "",
  "body": "  If is a connected space and is a quotient space, then is connected.   "
},
{
  "id": "thm-3.54",
  "level": "2",
  "url": "sec-connected.html#thm-3.54",
  "type": "Theorem",
  "number": "3.3.9",
  "title": "",
  "body": "  If and are connected spaces, then the product space is connected.   "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "sec-connected.html#remark-9",
  "type": "Remark",
  "number": "3.3.10",
  "title": "",
  "body": " Connectedness is not preserved by subspaces or continuous preimages.  "
},
{
  "id": "lem-3.57",
  "level": "2",
  "url": "sec-connected.html#lem-3.57",
  "type": "Lemma",
  "number": "3.3.11",
  "title": "",
  "body": "  Let be a topological space and suppose that . If is a connected subspace of for all , then is connected.   "
},
{
  "id": "prop-3.60",
  "level": "2",
  "url": "sec-connected.html#prop-3.60",
  "type": "Proposition",
  "number": "3.3.12",
  "title": "",
  "body": "  If is a connected subspace of a space and if are a disconnection of , then either or .   "
},
{
  "id": "thm-3.63",
  "level": "2",
  "url": "sec-connected.html#thm-3.63",
  "type": "Theorem",
  "number": "3.3.13",
  "title": "",
  "body": "  A subspace of is connected if and only if is either an interval, a ray, or .   "
},
{
  "id": "prop-3.64",
  "level": "2",
  "url": "sec-connected.html#prop-3.64",
  "type": "Proposition",
  "number": "3.3.14",
  "title": "",
  "body": "   and (with ) with the Euclidean topology are not homeomorphic.   "
},
{
  "id": "thm-3.67",
  "level": "2",
  "url": "sec-connected.html#thm-3.67",
  "type": "Theorem",
  "number": "3.3.15",
  "title": "",
  "body": "  Let and be topological spaces with , and let and . Let have the disjoint union topology. Define to be the minimal equivalence relation on such that , and let be the corresponding quotient space. Then:   There are embeddings and .    If and are connected, then is connected.      "
},
{
  "id": "convention-1",
  "level": "2",
  "url": "sec-connected.html#convention-1",
  "type": "Convention",
  "number": "3.3.16",
  "title": "",
  "body": " Let denote the topological space with the Euclidean subspace topology.  "
},
{
  "id": "def-3.71",
  "level": "2",
  "url": "sec-connected.html#def-3.71",
  "type": "Definition",
  "number": "3.3.17",
  "title": "",
  "body": "  Let be a topological space and let . A path in from to is a continuous function such that and .   "
},
{
  "id": "def-3.72",
  "level": "2",
  "url": "sec-connected.html#def-3.72",
  "type": "Definition",
  "number": "3.3.18",
  "title": "",
  "body": "  A space is path-connected, or PC, if for all , there is a continuous function such that and (that is, there is a path from to ).   "
},
{
  "id": "example-30",
  "level": "2",
  "url": "sec-connected.html#example-30",
  "type": "Example",
  "number": "3.3.19",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-3.75",
  "level": "2",
  "url": "sec-connected.html#thm-3.75",
  "type": "Theorem",
  "number": "3.3.20",
  "title": "",
  "body": "  A continuous image of a path-connected space is path-connected.   "
},
{
  "id": "cor-3.76",
  "level": "2",
  "url": "sec-connected.html#cor-3.76",
  "type": "Corollary",
  "number": "3.3.21",
  "title": "",
  "body": "  Path-connectedness is a homeomorphism invariant.   "
},
{
  "id": "thm-3.80",
  "level": "2",
  "url": "sec-connected.html#thm-3.80",
  "type": "Theorem",
  "number": "3.3.22",
  "title": "",
  "body": "     If is a path-connected space for all , then the product space is path-connected.    If is a path-connected space and is an equivalence relation on , then the quotient space is path-connected.      "
},
{
  "id": "remark-10",
  "level": "2",
  "url": "sec-connected.html#remark-10",
  "type": "Remark",
  "number": "3.3.23",
  "title": "",
  "body": " Path-connectedness is not preserved by subspaces or continuous preimages.  "
},
{
  "id": "lem-3.83",
  "level": "2",
  "url": "sec-connected.html#lem-3.83",
  "type": "Lemma",
  "number": "3.3.24",
  "title": "",
  "body": "  Let be a topological space and suppose that and . If is PC subspace of for all , then is PC.   "
},
{
  "id": "thm-3.90",
  "level": "2",
  "url": "sec-connected.html#thm-3.90",
  "type": "Theorem",
  "number": "3.3.25",
  "title": "",
  "body": "  If is a path-connected space, then is connected.   "
},
{
  "id": "def-3.93",
  "level": "2",
  "url": "sec-connected.html#def-3.93",
  "type": "Definition",
  "number": "3.3.26",
  "title": "",
  "body": "  The flea and comb space is the subset of with the Euclidean subspace topology. The point is the flea and the subspace is the comb.   "
},
{
  "id": "thm-3.94",
  "level": "2",
  "url": "sec-connected.html#thm-3.94",
  "type": "Theorem",
  "number": "3.3.27",
  "title": "",
  "body": "  Connectedness does not imply path-connectedness. In particular, the flea-and-comb space is connected but not path-connected.   "
},
{
  "id": "thm-3.96",
  "level": "2",
  "url": "sec-connected.html#thm-3.96",
  "type": "Theorem",
  "number": "3.3.28",
  "title": "",
  "body": "  A subspace of is path-connected iff is either an interval, ray, or .   "
},
{
  "id": "def-3.100",
  "level": "2",
  "url": "sec-connected.html#def-3.100",
  "type": "Definition",
  "number": "3.3.29",
  "title": "",
  "body": "  Let be a topological space, and let be the equivalence relation on defined by if and only if there is a connected subspace of with . A connected component of is an equivalence class for the relation .   "
},
{
  "id": "def-3.102",
  "level": "2",
  "url": "sec-connected.html#def-3.102",
  "type": "Definition",
  "number": "3.3.30",
  "title": "",
  "body": "  Let be a topological space, and let be the equivalence relation on defined by if and only if there is a path in from to . A path component of is an equivalence class for the relation .   "
},
{
  "id": "example-31",
  "level": "2",
  "url": "sec-connected.html#example-31",
  "type": "Example",
  "number": "3.3.31",
  "title": "",
  "body": " Examples  "
},
{
  "id": "lem-3.104",
  "level": "2",
  "url": "sec-connected.html#lem-3.104",
  "type": "Lemma",
  "number": "3.3.32",
  "title": "",
  "body": "   and are equivalence relations.   "
},
{
  "id": "thm-3.105",
  "level": "2",
  "url": "sec-connected.html#thm-3.105",
  "type": "Theorem",
  "number": "3.3.33",
  "title": "",
  "body": "  Let be a topological space. Then is a disjoint union of its connected components. Moreover, each connected component is a disjoint union of path components.   "
},
{
  "id": "thm-3.108",
  "level": "2",
  "url": "sec-connected.html#thm-3.108",
  "type": "Theorem",
  "number": "3.3.34",
  "title": "",
  "body": "     The number (cardinality) of connected components is a homeomorphism invariant.    The number (cardinality) of path components is a homeomorphism invariant.      "
},
{
  "id": "sec-compactness",
  "level": "1",
  "url": "sec-compactness.html",
  "type": "Section",
  "number": "3.4",
  "title": "Compactness",
  "body": "Compactness    A piece of art is a compact form of the universe   Thomas Kinkade   Motivation: Characterize spaces for which the Extreme Value Theorem holds.    Let be a topological space. A collection of subsets of is said to cover , or to be a covering of , if . An open covering of a topological space is a collection of open sets in that covers .      A topological space is compact if every open covering of contains a finite subcollection that also covers .    EVT = Extreme Value Theorem   Let be a compact space, and let be a continuous function. Then there exist such that for all , .     Examples   Interactions with constructions and continuous functions:    Let be a subspace of a topological space . The space is compact if and only if for every collection of open sets in satisfying , there is a finite subcollection such that .    A continuous image of a compact space is compact   If are topological spaces, and if is compact and is a continuous surjective function, then is compact.      Compactness is a homeomorphism invariant.      If is a compact space and is a quotient space, then is compact.      If is a subspace of a compact space and is a closed subset in , then is compact.    Every compact subspace of a Hausdorff space is closed   If is a compact subspace of a space , then is a closed subset of .      If is a compact subspace of a space , and , then there are disjoint open sets in satisfying and .         If and are compact spaces, then the product space is compact. (a') (\"Tychonoff theorem\") If is a compact space for all , then the product space is compact.   Tube Lemma  If and are spaces, is compact, and is an open set in the product space , then there is an open set in such that .        Compactness is not preserved by non-closed subspaces or continuous preimages.    VUT = Very Useful Theorem   A continuous bijection from a compact space to a Hausdorff space is a homeomorphism.    CH-HBT = Compact Hausdorff Homeomorphism Building Theorem   Let be a compact space, let be an equivalence relation on , and let be the quotient space. If is a space and is a continuous surjection satisfying if and only if for all , then the function defined by for all is a homeomorphism.    (CQ4)   If is a compact space, is a space, and is a surjective continuous function, then is a quotient map.    Compactness and Euclidean topology:    If with , then the interval , with the subspace topology from , is compact.      Let be a metric space. The diameter of a nonempty subset of is . The set is bounded if is finite.    Heine-Borel Theorem   Let be a subspace of . Then is compact iff is a closed and bounded subset of .          If is the smallest equivalence relation on such that , then , with a homeomorphism that maps the equivalence class to the point for all .    If is the smallest equivalence relation on such that for all and for all , then , with a homeomorphism that maps the equivalence class to the point and maps to for all .         Let be a topological space, let be an equivalence relation on , and let be the quotient map. Let have the Euclidean subspace topology.   The function defined by for all is a quotient map.    The relation \\approx on X \\times I defined by [(p,t) \\approx (p',t') if and only if p \\sim p' and t = t' for all (p,t),(p',t') \\in X \\times I] is an equivalence relation on X \\times I.    The function h:(X \\times I)\/\\approx \\to (X\/\\sim ) \\times I defined by h([(p,t)]) := [(q(p),t)] for all [(p,t)] \\in (X \\times I)\/\\approx is a homeomorphism.       Lebesgue Number Lemma   If is a compact metrizable space and is an open covering of , then there is a real number such that whenever is a subset of with diameter , then there is an open set with .    "
},
{
  "id": "def-3.120",
  "level": "2",
  "url": "sec-compactness.html#def-3.120",
  "type": "Definition",
  "number": "3.4.1",
  "title": "",
  "body": "  Let be a topological space. A collection of subsets of is said to cover , or to be a covering of , if . An open covering of a topological space is a collection of open sets in that covers .   "
},
{
  "id": "def-3.121",
  "level": "2",
  "url": "sec-compactness.html#def-3.121",
  "type": "Definition",
  "number": "3.4.2",
  "title": "",
  "body": "  A topological space is compact if every open covering of contains a finite subcollection that also covers .   "
},
{
  "id": "thm-3.124",
  "level": "2",
  "url": "sec-compactness.html#thm-3.124",
  "type": "Theorem",
  "number": "3.4.3",
  "title": "EVT = Extreme Value Theorem.",
  "body": "EVT = Extreme Value Theorem   Let be a compact space, and let be a continuous function. Then there exist such that for all , .   "
},
{
  "id": "example-32",
  "level": "2",
  "url": "sec-compactness.html#example-32",
  "type": "Example",
  "number": "3.4.4",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-3.128",
  "level": "2",
  "url": "sec-compactness.html#thm-3.128",
  "type": "Theorem",
  "number": "3.4.5",
  "title": "",
  "body": "  Let be a subspace of a topological space . The space is compact if and only if for every collection of open sets in satisfying , there is a finite subcollection such that .   "
},
{
  "id": "thm-3.132",
  "level": "2",
  "url": "sec-compactness.html#thm-3.132",
  "type": "Theorem",
  "number": "3.4.6",
  "title": "A continuous image of a compact space is compact.",
  "body": "A continuous image of a compact space is compact   If are topological spaces, and if is compact and is a continuous surjective function, then is compact.   "
},
{
  "id": "cor-3.133",
  "level": "2",
  "url": "sec-compactness.html#cor-3.133",
  "type": "Corollary",
  "number": "3.4.7",
  "title": "",
  "body": "  Compactness is a homeomorphism invariant.   "
},
{
  "id": "cor-3.134",
  "level": "2",
  "url": "sec-compactness.html#cor-3.134",
  "type": "Corollary",
  "number": "3.4.8",
  "title": "",
  "body": "  If is a compact space and is a quotient space, then is compact.   "
},
{
  "id": "thm-3.138",
  "level": "2",
  "url": "sec-compactness.html#thm-3.138",
  "type": "Theorem",
  "number": "3.4.9",
  "title": "",
  "body": "  If is a subspace of a compact space and is a closed subset in , then is compact.   "
},
{
  "id": "thm-3.139",
  "level": "2",
  "url": "sec-compactness.html#thm-3.139",
  "type": "Theorem",
  "number": "3.4.10",
  "title": "Every compact subspace of a Hausdorff space is closed.",
  "body": "Every compact subspace of a Hausdorff space is closed   If is a compact subspace of a space , then is a closed subset of .   "
},
{
  "id": "cor-3.142",
  "level": "2",
  "url": "sec-compactness.html#cor-3.142",
  "type": "Corollary",
  "number": "3.4.11",
  "title": "",
  "body": "  If is a compact subspace of a space , and , then there are disjoint open sets in satisfying and .   "
},
{
  "id": "thm-3.145",
  "level": "2",
  "url": "sec-compactness.html#thm-3.145",
  "type": "Theorem",
  "number": "3.4.12",
  "title": "",
  "body": "     If and are compact spaces, then the product space is compact. (a') (\"Tychonoff theorem\") If is a compact space for all , then the product space is compact.   Tube Lemma  If and are spaces, is compact, and is an open set in the product space , then there is an open set in such that .      "
},
{
  "id": "remark-11",
  "level": "2",
  "url": "sec-compactness.html#remark-11",
  "type": "Remark",
  "number": "3.4.13",
  "title": "",
  "body": " Compactness is not preserved by non-closed subspaces or continuous preimages.  "
},
{
  "id": "thm-3.150",
  "level": "2",
  "url": "sec-compactness.html#thm-3.150",
  "type": "Theorem",
  "number": "3.4.14",
  "title": "VUT = Very Useful Theorem.",
  "body": "VUT = Very Useful Theorem   A continuous bijection from a compact space to a Hausdorff space is a homeomorphism.   "
},
{
  "id": "cor-3.152",
  "level": "2",
  "url": "sec-compactness.html#cor-3.152",
  "type": "Corollary",
  "number": "3.4.15",
  "title": "CH-HBT = Compact Hausdorff Homeomorphism Building Theorem.",
  "body": "CH-HBT = Compact Hausdorff Homeomorphism Building Theorem   Let be a compact space, let be an equivalence relation on , and let be the quotient space. If is a space and is a continuous surjection satisfying if and only if for all , then the function defined by for all is a homeomorphism.   "
},
{
  "id": "thm-3.153",
  "level": "2",
  "url": "sec-compactness.html#thm-3.153",
  "type": "Theorem",
  "number": "3.4.16",
  "title": "(CQ4).",
  "body": "(CQ4)   If is a compact space, is a space, and is a surjective continuous function, then is a quotient map.   "
},
{
  "id": "thm-3.155",
  "level": "2",
  "url": "sec-compactness.html#thm-3.155",
  "type": "Theorem",
  "number": "3.4.17",
  "title": "",
  "body": "  If with , then the interval , with the subspace topology from , is compact.   "
},
{
  "id": "def-3.157",
  "level": "2",
  "url": "sec-compactness.html#def-3.157",
  "type": "Definition",
  "number": "3.4.18",
  "title": "",
  "body": "  Let be a metric space. The diameter of a nonempty subset of is . The set is bounded if is finite.   "
},
{
  "id": "thm-3.158",
  "level": "2",
  "url": "sec-compactness.html#thm-3.158",
  "type": "Theorem",
  "number": "3.4.19",
  "title": "Heine-Borel Theorem.",
  "body": "Heine-Borel Theorem   Let be a subspace of . Then is compact iff is a closed and bounded subset of .   "
},
{
  "id": "prop-3.160",
  "level": "2",
  "url": "sec-compactness.html#prop-3.160",
  "type": "Proposition",
  "number": "3.4.20",
  "title": "",
  "body": "     If is the smallest equivalence relation on such that , then , with a homeomorphism that maps the equivalence class to the point for all .    If is the smallest equivalence relation on such that for all and for all , then , with a homeomorphism that maps the equivalence class to the point and maps to for all .      "
},
{
  "id": "thm-3.162",
  "level": "2",
  "url": "sec-compactness.html#thm-3.162",
  "type": "Theorem",
  "number": "3.4.21",
  "title": "",
  "body": "  Let be a topological space, let be an equivalence relation on , and let be the quotient map. Let have the Euclidean subspace topology.   The function defined by for all is a quotient map.    The relation \\approx on X \\times I defined by [(p,t) \\approx (p',t') if and only if p \\sim p' and t = t' for all (p,t),(p',t') \\in X \\times I] is an equivalence relation on X \\times I.    The function h:(X \\times I)\/\\approx \\to (X\/\\sim ) \\times I defined by h([(p,t)]) := [(q(p),t)] for all [(p,t)] \\in (X \\times I)\/\\approx is a homeomorphism.      "
},
{
  "id": "thm-3.166",
  "level": "2",
  "url": "sec-compactness.html#thm-3.166",
  "type": "Theorem",
  "number": "3.4.22",
  "title": "Lebesgue Number Lemma.",
  "body": "Lebesgue Number Lemma   If is a compact metrizable space and is an open covering of , then there is a real number such that whenever is a subset of with diameter , then there is an open set with .   "
},
{
  "id": "sec-separation",
  "level": "1",
  "url": "sec-separation.html",
  "type": "Section",
  "number": "3.5",
  "title": "Separation and Countable Basis Properties",
  "body": "Separation and Countable Basis Properties     Separation is not the end of love; it creates love.   Nancy Friday   Motivation: Characterize metrizability (in particular for compact spaces) in terms of properties defined via open sets.   Countable Basis    A space has a countable basis if the topology is generated by a basis that is a countable set.      A countable basis is a homeomorphism invariant.      The property of having a topology generated by a countable basis is preserved by subspaces and countable products.     Examples        If is a compact and metrizable space, then is generated by a countable basis.    Metrizability does not imply a countable basis.        Separation properties    Let be a topological space.    is if for any points with , there are open sets in with , , , and .     is , or Hausdorff, if for any points with , there are open sets in with , , and .     is if is and for any point and closed set in with , there are open sets in with , and .     is if is and for any closed sets in with , there are open sets in with , , and .        If is a space, then is also called regular and is also called normal.     For each , the property is a homeomorphism invariant.      A space is if and only if all one-points sets are closed in .      For each , the property implies the property , but the converse fails.     Examples   Interactions with constructions     and are preserved by subspaces and products.      and are not preserved by quotients. is not preserved by subspaces, products, or quotients.      A space is iff is and for all and open in with , there is an open set in with .      A space is iff is and for all closed and open in with , there is an open set in with .     Interactions among homeomorphism invariants    Metrizable spaces are . (The converse is not true.)      Compact Hausdorff spaces are . (The converse is not true.)      A space with a countable basis is .    Urysohn's Lemma   Let be a space. The following are equivalent:    is .    Whenever and are disjoint closed subsets of , there is a continuous function such that and .       UMT = Urysohn Metrization Theorem   If is a space with a countable basis, then is metrizable.      Let be compact. The following are equivalent:    is metrizable.     is and has a countable basis.        "
},
{
  "id": "def-3.170",
  "level": "2",
  "url": "sec-separation.html#def-3.170",
  "type": "Definition",
  "number": "3.5.1",
  "title": "",
  "body": "  A space has a countable basis if the topology is generated by a basis that is a countable set.   "
},
{
  "id": "thm-3.171",
  "level": "2",
  "url": "sec-separation.html#thm-3.171",
  "type": "Theorem",
  "number": "3.5.2",
  "title": "",
  "body": "  A countable basis is a homeomorphism invariant.   "
},
{
  "id": "thm-3.172",
  "level": "2",
  "url": "sec-separation.html#thm-3.172",
  "type": "Theorem",
  "number": "3.5.3",
  "title": "",
  "body": "  The property of having a topology generated by a countable basis is preserved by subspaces and countable products.   "
},
{
  "id": "example-33",
  "level": "2",
  "url": "sec-separation.html#example-33",
  "type": "Example",
  "number": "3.5.4",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-3.174",
  "level": "2",
  "url": "sec-separation.html#thm-3.174",
  "type": "Theorem",
  "number": "3.5.5",
  "title": "",
  "body": "     If is a compact and metrizable space, then is generated by a countable basis.    Metrizability does not imply a countable basis.      "
},
{
  "id": "def-3.180",
  "level": "2",
  "url": "sec-separation.html#def-3.180",
  "type": "Definition",
  "number": "3.5.6",
  "title": "",
  "body": "  Let be a topological space.    is if for any points with , there are open sets in with , , , and .     is , or Hausdorff, if for any points with , there are open sets in with , , and .     is if is and for any point and closed set in with , there are open sets in with , and .     is if is and for any closed sets in with , there are open sets in with , , and .      "
},
{
  "id": "remark-12",
  "level": "2",
  "url": "sec-separation.html#remark-12",
  "type": "Remark",
  "number": "3.5.7",
  "title": "",
  "body": " If is a space, then is also called regular and is also called normal.  "
},
{
  "id": "thm-3.183",
  "level": "2",
  "url": "sec-separation.html#thm-3.183",
  "type": "Theorem",
  "number": "3.5.8",
  "title": "",
  "body": "  For each , the property is a homeomorphism invariant.   "
},
{
  "id": "prop-3.185",
  "level": "2",
  "url": "sec-separation.html#prop-3.185",
  "type": "Proposition",
  "number": "3.5.9",
  "title": "",
  "body": "  A space is if and only if all one-points sets are closed in .   "
},
{
  "id": "thm-3.186",
  "level": "2",
  "url": "sec-separation.html#thm-3.186",
  "type": "Theorem",
  "number": "3.5.10",
  "title": "",
  "body": "  For each , the property implies the property , but the converse fails.   "
},
{
  "id": "example-34",
  "level": "2",
  "url": "sec-separation.html#example-34",
  "type": "Example",
  "number": "3.5.11",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-3.190",
  "level": "2",
  "url": "sec-separation.html#thm-3.190",
  "type": "Theorem",
  "number": "3.5.12",
  "title": "",
  "body": "   and are preserved by subspaces and products.   "
},
{
  "id": "remark-13",
  "level": "2",
  "url": "sec-separation.html#remark-13",
  "type": "Remark",
  "number": "3.5.13",
  "title": "",
  "body": "  and are not preserved by quotients. is not preserved by subspaces, products, or quotients.  "
},
{
  "id": "thm-3.194",
  "level": "2",
  "url": "sec-separation.html#thm-3.194",
  "type": "Theorem",
  "number": "3.5.14",
  "title": "",
  "body": "  A space is iff is and for all and open in with , there is an open set in with .   "
},
{
  "id": "thm-3.195",
  "level": "2",
  "url": "sec-separation.html#thm-3.195",
  "type": "Theorem",
  "number": "3.5.15",
  "title": "",
  "body": "  A space is iff is and for all closed and open in with , there is an open set in with .   "
},
{
  "id": "thm-",
  "level": "2",
  "url": "sec-separation.html#thm-",
  "type": "Theorem",
  "number": "3.5.16",
  "title": "",
  "body": "  Metrizable spaces are . (The converse is not true.)   "
},
{
  "id": "thm-3.200",
  "level": "2",
  "url": "sec-separation.html#thm-3.200",
  "type": "Theorem",
  "number": "3.5.17",
  "title": "",
  "body": "  Compact Hausdorff spaces are . (The converse is not true.)   "
},
{
  "id": "thm-3.202",
  "level": "2",
  "url": "sec-separation.html#thm-3.202",
  "type": "Theorem",
  "number": "3.5.18",
  "title": "",
  "body": "  A space with a countable basis is .   "
},
{
  "id": "thm-3.208",
  "level": "2",
  "url": "sec-separation.html#thm-3.208",
  "type": "Theorem",
  "number": "3.5.19",
  "title": "Urysohn's Lemma.",
  "body": "Urysohn's Lemma   Let be a space. The following are equivalent:    is .    Whenever and are disjoint closed subsets of , there is a continuous function such that and .      "
},
{
  "id": "thm-3.210",
  "level": "2",
  "url": "sec-separation.html#thm-3.210",
  "type": "Theorem",
  "number": "3.5.20",
  "title": "UMT = Urysohn Metrization Theorem.",
  "body": "UMT = Urysohn Metrization Theorem   If is a space with a countable basis, then is metrizable.   "
},
{
  "id": "cor-3.212",
  "level": "2",
  "url": "sec-separation.html#cor-3.212",
  "type": "Corollary",
  "number": "3.5.21",
  "title": "",
  "body": "  Let be compact. The following are equivalent:    is metrizable.     is and has a countable basis.      "
},
{
  "id": "sec-homotopy-overview",
  "level": "1",
  "url": "sec-homotopy-overview.html",
  "type": "Section",
  "number": "4.1",
  "title": "Overview of Algebraic Topology",
  "body": "Overview of Algebraic Topology  Motivation: Homeomorphism invariants in Chapter 3 are not enough to answer the Homeomorphism Problem, and in particular they cannot show that a sphere is not homeomorphic to a torus.  Motivation: Homotopy equivalence (written \\simeq ) is an equivalence relation that allows deforming\/retracting spaces.    The Homotopy Equivalence Problem asks: Is there a computer algorithm that, upon input of two topological spaces and , can determine whether or not ?      The Classification Problem asks: Is there a computer algorithm that can list all topological spaces up to homeomorphism, or up to homotopy equivalence?     Use homeomorphism invariants to prove , and use homotopy invariants to prove .    Motivation: Construct groups associated to topological spaces that, up to isomorphism, are homotopy invariants: Homotopy groups of spaces - all groups Homology groups of spaces - abelian groups Categories and functors   "
},
{
  "id": "def-4.1",
  "level": "2",
  "url": "sec-homotopy-overview.html#def-4.1",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "  The Homotopy Equivalence Problem asks: Is there a computer algorithm that, upon input of two topological spaces and , can determine whether or not ?   "
},
{
  "id": "def-4.2",
  "level": "2",
  "url": "sec-homotopy-overview.html#def-4.2",
  "type": "Definition",
  "number": "4.1.2",
  "title": "",
  "body": "  The Classification Problem asks: Is there a computer algorithm that can list all topological spaces up to homeomorphism, or up to homotopy equivalence?   "
},
{
  "id": "remark-14",
  "level": "2",
  "url": "sec-homotopy-overview.html#remark-14",
  "type": "Remark",
  "number": "4.1.3",
  "title": "",
  "body": " Use homeomorphism invariants to prove , and use homotopy invariants to prove .  "
},
{
  "id": "remark-15",
  "level": "2",
  "url": "sec-homotopy-overview.html#remark-15",
  "type": "Remark",
  "number": "4.1.4",
  "title": "",
  "body": " Motivation: Construct groups associated to topological spaces that, up to isomorphism, are homotopy invariants: Homotopy groups of spaces - all groups Homology groups of spaces - abelian groups Categories and functors  "
},
{
  "id": "sec-retracts",
  "level": "1",
  "url": "sec-retracts.html",
  "type": "Section",
  "number": "4.2",
  "title": "Retracts",
  "body": "Retracts    Let be a subspace of a topological space . The space is a retract of if there is a continuous function satisfying for all . The function is called a retraction from to .      Let be a subspace of a topological space . A deformation retraction of onto is a family of maps for all such that:    ,     ,     for all , and    the function defined by , for all and , is continuous.   The function is also called a deformation retraction from to . The space is called a deformation retract of , written .      If is a deformation retraction from a topological space onto a subspace , then is continuous for all . Moreover, is the composition of a retraction from to with the inclusion map .      Let and be topological spaces and let be a continuous map. Let have the disjoint union topology (where has the product topology), and let be the minimal equivalence relation on such that for all . The mapping cylinder of is the quotient space .      If is the mapping cylinder associated to a continuous function , then the functions defined by for all and defined by for all are embeddings.      If and are topological spaces and is a continuous map, then is homeomorphic to a deformation retract of the mapping cylinder associated to .      Let be a topological space and let be a continuous map. Let have the product topology, and let be the minimal equivalence relation on such that for all . The mapping torus of is the quotient space .     If is a topological space and is a continuous map, then may not be homeomorphic to a deformation retract of the mapping cylinder associated to .   "
},
{
  "id": "def-4.10",
  "level": "2",
  "url": "sec-retracts.html#def-4.10",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "  Let be a subspace of a topological space . The space is a retract of if there is a continuous function satisfying for all . The function is called a retraction from to .   "
},
{
  "id": "def-4.12",
  "level": "2",
  "url": "sec-retracts.html#def-4.12",
  "type": "Definition",
  "number": "4.2.2",
  "title": "",
  "body": "  Let be a subspace of a topological space . A deformation retraction of onto is a family of maps for all such that:    ,     ,     for all , and    the function defined by , for all and , is continuous.   The function is also called a deformation retraction from to . The space is called a deformation retract of , written .   "
},
{
  "id": "lem-4.14",
  "level": "2",
  "url": "sec-retracts.html#lem-4.14",
  "type": "Lemma",
  "number": "4.2.3",
  "title": "",
  "body": "  If is a deformation retraction from a topological space onto a subspace , then is continuous for all . Moreover, is the composition of a retraction from to with the inclusion map .   "
},
{
  "id": "def-4.20",
  "level": "2",
  "url": "sec-retracts.html#def-4.20",
  "type": "Definition",
  "number": "4.2.4",
  "title": "",
  "body": "  Let and be topological spaces and let be a continuous map. Let have the disjoint union topology (where has the product topology), and let be the minimal equivalence relation on such that for all . The mapping cylinder of is the quotient space .   "
},
{
  "id": "thm-4.21",
  "level": "2",
  "url": "sec-retracts.html#thm-4.21",
  "type": "Theorem",
  "number": "4.2.5",
  "title": "",
  "body": "  If is the mapping cylinder associated to a continuous function , then the functions defined by for all and defined by for all are embeddings.   "
},
{
  "id": "thm-4.22",
  "level": "2",
  "url": "sec-retracts.html#thm-4.22",
  "type": "Theorem",
  "number": "4.2.6",
  "title": "",
  "body": "  If and are topological spaces and is a continuous map, then is homeomorphic to a deformation retract of the mapping cylinder associated to .   "
},
{
  "id": "def-4.25",
  "level": "2",
  "url": "sec-retracts.html#def-4.25",
  "type": "Definition",
  "number": "4.2.7",
  "title": "",
  "body": "  Let be a topological space and let be a continuous map. Let have the product topology, and let be the minimal equivalence relation on such that for all . The mapping torus of is the quotient space .   "
},
{
  "id": "remark-16",
  "level": "2",
  "url": "sec-retracts.html#remark-16",
  "type": "Remark",
  "number": "4.2.8",
  "title": "",
  "body": " If is a topological space and is a continuous map, then may not be homeomorphic to a deformation retract of the mapping cylinder associated to .  "
},
{
  "id": "sec-homotopy-equiv",
  "level": "1",
  "url": "sec-homotopy-equiv.html",
  "type": "Section",
  "number": "4.3",
  "title": "Homotopy and Homotopy Equivalence",
  "body": "Homotopy and Homotopy Equivalence  Motivation: Deformation retraction is not symmetric and so is not an equivalence relation on topological spaces; build a (smallest) equivalence relation that includes deformation retraction.    Let and be topological spaces and let continuous functions. A homotopy from to is a family of maps for all such that    ,     , and    the function defined by , for all and , is continuous.   The function is also called a homotopy from to . The function is said to be homotopic to , written .      If are continuous functions and is a homotopy from to , then is continuous for all .      Let and be topological spaces. Homotopy is an equivalence relation on the set of functions .      If is a subspace of a topological space and is a deformation retraction from onto , then is a homotopy from to , and is the composition of a retraction from to with the inclusion map .     Examples     If is a topological space and are continuous functions, then the straight line homotopy from to is the function defined by for all and .      If is straight line homotopy from to , then is a homotopy from to .      Let and be topological spaces, let be a subspace of , and let continuous functions that satisfy . A homotopy from to relative to is a family of maps for all such that    ,     ,    the function defined by , for all and , is continuous, and     for all .   The function is also called a homotopy from to relative to . The function is said to be homotopic to relative to , written .      Topological spaces X and Y are homotopy equivalent, written X \\simeq Y, if there are continuous functions f:X \\to Y and g:Y \\to X such that f \\circ g \\simeq 1Y and g \\circ f \\simeq 1X. The functions f and g are called homotopy equivalences, and each function is a homotopy inverse of the other.      Homotopy equivalence is an equivalence relation on topological spaces.      Let X and Y be topological spaces.   If X \\cong Y then X \\simeq Y.    If f,g: X \\to Y and f = g then f \\simeq g. If moreover Z is any subspace of X then f \\simeq Z g also.         A property P of topological spaces is a homotopy invariant if whenever X \\simeq Y and X has property P, then Y has property P.     Use homotopy invariants to prove two spaces are NOT homotopy equivalent.     Path-connectedness is a homotopy invariant.      Compactness is not a homotopy invariant.      If Y is a deformation retract of X, then X \\simeq Y.      Let X and Y be topological spaces. Then X \\simeq Y if and only if there is a space Z such that X and Y are both deformation retracts of Z.      Let \\approx be the smallest equivalence relation on spaces such that whenever Y is a deformation retract of X then Y \\approx X. Then X \\simeq Z iff X \\approx Z.      A space X is contractible if X \\simeq P, where P =\\{*\\} is the topological space with one point.      Let X and Y be topological spaces. A map f:X \\to Y is null homotopic if f is homotopic to a constant function.      A space X is contractible iff the identity map 1X on X is nullhomotopic.     Examples   "
},
{
  "id": "def-4.30",
  "level": "2",
  "url": "sec-homotopy-equiv.html#def-4.30",
  "type": "Definition",
  "number": "4.3.1",
  "title": "",
  "body": "  Let and be topological spaces and let continuous functions. A homotopy from to is a family of maps for all such that    ,     , and    the function defined by , for all and , is continuous.   The function is also called a homotopy from to . The function is said to be homotopic to , written .   "
},
{
  "id": "lem-4.31",
  "level": "2",
  "url": "sec-homotopy-equiv.html#lem-4.31",
  "type": "Lemma",
  "number": "4.3.2",
  "title": "",
  "body": "  If are continuous functions and is a homotopy from to , then is continuous for all .   "
},
{
  "id": "lem-4.32",
  "level": "2",
  "url": "sec-homotopy-equiv.html#lem-4.32",
  "type": "Lemma",
  "number": "4.3.3",
  "title": "",
  "body": "  Let and be topological spaces. Homotopy is an equivalence relation on the set of functions .   "
},
{
  "id": "prop-4.35",
  "level": "2",
  "url": "sec-homotopy-equiv.html#prop-4.35",
  "type": "Proposition",
  "number": "4.3.4",
  "title": "",
  "body": "  If is a subspace of a topological space and is a deformation retraction from onto , then is a homotopy from to , and is the composition of a retraction from to with the inclusion map .   "
},
{
  "id": "example-35",
  "level": "2",
  "url": "sec-homotopy-equiv.html#example-35",
  "type": "Example",
  "number": "4.3.5",
  "title": "",
  "body": " Examples  "
},
{
  "id": "def-4.37",
  "level": "2",
  "url": "sec-homotopy-equiv.html#def-4.37",
  "type": "Definition",
  "number": "4.3.6",
  "title": "",
  "body": "  If is a topological space and are continuous functions, then the straight line homotopy from to is the function defined by for all and .   "
},
{
  "id": "prop-4.38",
  "level": "2",
  "url": "sec-homotopy-equiv.html#prop-4.38",
  "type": "Proposition",
  "number": "4.3.7",
  "title": "",
  "body": "  If is straight line homotopy from to , then is a homotopy from to .   "
},
{
  "id": "def-4.40",
  "level": "2",
  "url": "sec-homotopy-equiv.html#def-4.40",
  "type": "Definition",
  "number": "4.3.8",
  "title": "",
  "body": "  Let and be topological spaces, let be a subspace of , and let continuous functions that satisfy . A homotopy from to relative to is a family of maps for all such that    ,     ,    the function defined by , for all and , is continuous, and     for all .   The function is also called a homotopy from to relative to . The function is said to be homotopic to relative to , written .   "
},
{
  "id": "def-4.44",
  "level": "2",
  "url": "sec-homotopy-equiv.html#def-4.44",
  "type": "Definition",
  "number": "4.3.9",
  "title": "",
  "body": "  Topological spaces X and Y are homotopy equivalent, written X \\simeq Y, if there are continuous functions f:X \\to Y and g:Y \\to X such that f \\circ g \\simeq 1Y and g \\circ f \\simeq 1X. The functions f and g are called homotopy equivalences, and each function is a homotopy inverse of the other.   "
},
{
  "id": "thm-4.45",
  "level": "2",
  "url": "sec-homotopy-equiv.html#thm-4.45",
  "type": "Theorem",
  "number": "4.3.10",
  "title": "",
  "body": "  Homotopy equivalence is an equivalence relation on topological spaces.   "
},
{
  "id": "lem-4.47",
  "level": "2",
  "url": "sec-homotopy-equiv.html#lem-4.47",
  "type": "Lemma",
  "number": "4.3.11",
  "title": "",
  "body": "  Let X and Y be topological spaces.   If X \\cong Y then X \\simeq Y.    If f,g: X \\to Y and f = g then f \\simeq g. If moreover Z is any subspace of X then f \\simeq Z g also.      "
},
{
  "id": "def-4.50",
  "level": "2",
  "url": "sec-homotopy-equiv.html#def-4.50",
  "type": "Definition",
  "number": "4.3.12",
  "title": "",
  "body": "  A property P of topological spaces is a homotopy invariant if whenever X \\simeq Y and X has property P, then Y has property P.   "
},
{
  "id": "remark-17",
  "level": "2",
  "url": "sec-homotopy-equiv.html#remark-17",
  "type": "Remark",
  "number": "4.3.13",
  "title": "",
  "body": " Use homotopy invariants to prove two spaces are NOT homotopy equivalent.  "
},
{
  "id": "thm-4.52",
  "level": "2",
  "url": "sec-homotopy-equiv.html#thm-4.52",
  "type": "Theorem",
  "number": "4.3.14",
  "title": "",
  "body": "  Path-connectedness is a homotopy invariant.   "
},
{
  "id": "prop-4.53",
  "level": "2",
  "url": "sec-homotopy-equiv.html#prop-4.53",
  "type": "Proposition",
  "number": "4.3.15",
  "title": "",
  "body": "  Compactness is not a homotopy invariant.   "
},
{
  "id": "thm-4.54",
  "level": "2",
  "url": "sec-homotopy-equiv.html#thm-4.54",
  "type": "Theorem",
  "number": "4.3.16",
  "title": "",
  "body": "  If Y is a deformation retract of X, then X \\simeq Y.   "
},
{
  "id": "thm-4.55",
  "level": "2",
  "url": "sec-homotopy-equiv.html#thm-4.55",
  "type": "Theorem",
  "number": "4.3.17",
  "title": "",
  "body": "  Let X and Y be topological spaces. Then X \\simeq Y if and only if there is a space Z such that X and Y are both deformation retracts of Z.   "
},
{
  "id": "cor-4.56",
  "level": "2",
  "url": "sec-homotopy-equiv.html#cor-4.56",
  "type": "Corollary",
  "number": "4.3.18",
  "title": "",
  "body": "  Let \\approx be the smallest equivalence relation on spaces such that whenever Y is a deformation retract of X then Y \\approx X. Then X \\simeq Z iff X \\approx Z.   "
},
{
  "id": "def-4.60",
  "level": "2",
  "url": "sec-homotopy-equiv.html#def-4.60",
  "type": "Definition",
  "number": "4.3.19",
  "title": "",
  "body": "  A space X is contractible if X \\simeq P, where P =\\{*\\} is the topological space with one point.   "
},
{
  "id": "def-4.62",
  "level": "2",
  "url": "sec-homotopy-equiv.html#def-4.62",
  "type": "Definition",
  "number": "4.3.20",
  "title": "",
  "body": "  Let X and Y be topological spaces. A map f:X \\to Y is null homotopic if f is homotopic to a constant function.   "
},
{
  "id": "thm-4.62",
  "level": "2",
  "url": "sec-homotopy-equiv.html#thm-4.62",
  "type": "Theorem",
  "number": "4.3.21",
  "title": "",
  "body": "  A space X is contractible iff the identity map 1X on X is nullhomotopic.   "
},
{
  "id": "example-36",
  "level": "2",
  "url": "sec-homotopy-equiv.html#example-36",
  "type": "Example",
  "number": "4.3.22",
  "title": "",
  "body": " Examples  "
},
{
  "id": "sec-pi1",
  "level": "1",
  "url": "sec-pi1.html",
  "type": "Section",
  "number": "5.1",
  "title": "Definition of <span class=\"process-math\">\\(\\pi _1\\)<\/span>",
  "body": "Definition of    Let X be a topological space and let x_0 \\in X. A loop in X at x_0 is a continuous function f:I \\to X with f(0) = f(1) = x_0.      Two paths f,g:I \\to X in a space X are path homotopic, written f \\simeq p g, if there is a continuous function H: I \\times I \\to X such that H(s,0) = f(s) and H(s,1) = g(s) for all s \\in I, and H(0,t) = f(0) and H(1,t) = f(1) for all t \\in I. The map H is called a path homotopy.      If X is a topological space, then \\simeq p is an equivalence relation on the set of paths in X.      Let f,g:I \\to X be paths in a space X.   If f(1) = g(0), then their product, written f∗g, is the path in X from f(0) to g(1) defined by (f∗g)(s) := f(2s) for all s \\in [0,1\/2] and (f∗g)(s) := g(2s-1) for all s \\in [1\/2,1].    The constant path at x_0, written cx_0, is the path (loop) in X defined by cx_0 := x_0 for all s \\in I.    The reverse of the path f is the path frev:I \\to X defined by frev(s) := f(1-s) for all s \\in I.         Let f,g,h,k:I \\to X be paths in a space X, and let x_0 := f(0) and x1 := f(1).   If f \\simeq p g and h \\simeq p k, then f∗h \\simeq p g∗k.    cx_0∗f \\simeq p f \\simeq p f∗cx1.    f∗frev \\simeq p cx_0 and frev∗ f \\simeq p cx1.         Let X be a topological space and let x_0 \\in X. The fundamental group of X at the basepoint x_0, written \\pi_1(X,x_0), is the set of path homotopy equivalence classes of loops in X at x_0, with group operation defined by [f][g] := [f∗g] for all [f],[g] \\in \\pi_1(X,x_0).      \\pi_1(X,x_0) is a group.     Examples     \\pi_1(X,x_0) = 1 for all x_0 in X iff every continuous map S^1 \\to X extends to a continuous map D2 \\to X.    "
},
{
  "id": "def-5.1",
  "level": "2",
  "url": "sec-pi1.html#def-5.1",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "  Let X be a topological space and let x_0 \\in X. A loop in X at x_0 is a continuous function f:I \\to X with f(0) = f(1) = x_0.   "
},
{
  "id": "def-5.3",
  "level": "2",
  "url": "sec-pi1.html#def-5.3",
  "type": "Definition",
  "number": "5.1.2",
  "title": "",
  "body": "  Two paths f,g:I \\to X in a space X are path homotopic, written f \\simeq p g, if there is a continuous function H: I \\times I \\to X such that H(s,0) = f(s) and H(s,1) = g(s) for all s \\in I, and H(0,t) = f(0) and H(1,t) = f(1) for all t \\in I. The map H is called a path homotopy.   "
},
{
  "id": "lem-5.4",
  "level": "2",
  "url": "sec-pi1.html#lem-5.4",
  "type": "Lemma",
  "number": "5.1.3",
  "title": "",
  "body": "  If X is a topological space, then \\simeq p is an equivalence relation on the set of paths in X.   "
},
{
  "id": "def-5.6",
  "level": "2",
  "url": "sec-pi1.html#def-5.6",
  "type": "Definition",
  "number": "5.1.4",
  "title": "",
  "body": "  Let f,g:I \\to X be paths in a space X.   If f(1) = g(0), then their product, written f∗g, is the path in X from f(0) to g(1) defined by (f∗g)(s) := f(2s) for all s \\in [0,1\/2] and (f∗g)(s) := g(2s-1) for all s \\in [1\/2,1].    The constant path at x_0, written cx_0, is the path (loop) in X defined by cx_0 := x_0 for all s \\in I.    The reverse of the path f is the path frev:I \\to X defined by frev(s) := f(1-s) for all s \\in I.      "
},
{
  "id": "lem-5.8",
  "level": "2",
  "url": "sec-pi1.html#lem-5.8",
  "type": "Lemma",
  "number": "5.1.5",
  "title": "",
  "body": "  Let f,g,h,k:I \\to X be paths in a space X, and let x_0 := f(0) and x1 := f(1).   If f \\simeq p g and h \\simeq p k, then f∗h \\simeq p g∗k.    cx_0∗f \\simeq p f \\simeq p f∗cx1.    f∗frev \\simeq p cx_0 and frev∗ f \\simeq p cx1.      "
},
{
  "id": "def-5.10",
  "level": "2",
  "url": "sec-pi1.html#def-5.10",
  "type": "Definition",
  "number": "5.1.6",
  "title": "",
  "body": "  Let X be a topological space and let x_0 \\in X. The fundamental group of X at the basepoint x_0, written \\pi_1(X,x_0), is the set of path homotopy equivalence classes of loops in X at x_0, with group operation defined by [f][g] := [f∗g] for all [f],[g] \\in \\pi_1(X,x_0).   "
},
{
  "id": "thm-5.11",
  "level": "2",
  "url": "sec-pi1.html#thm-5.11",
  "type": "Theorem",
  "number": "5.1.7",
  "title": "",
  "body": "  \\pi_1(X,x_0) is a group.   "
},
{
  "id": "example-37",
  "level": "2",
  "url": "sec-pi1.html#example-37",
  "type": "Example",
  "number": "5.1.8",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-5.13",
  "level": "2",
  "url": "sec-pi1.html#thm-5.13",
  "type": "Theorem",
  "number": "5.1.9",
  "title": "",
  "body": "  \\pi_1(X,x_0) = 1 for all x_0 in X iff every continuous map S^1 \\to X extends to a continuous map D2 \\to X.   "
},
{
  "id": "sec-group-homs",
  "level": "1",
  "url": "sec-group-homs.html",
  "type": "Section",
  "number": "5.2",
  "title": "Group homomorphisms",
  "body": "Group homomorphisms  Change of basepoint and PC spaces    Let p:I \\to X be a path in a space X from x_0 to x1. The change of basepoint homomorphism induced by p is the function \\beta p: \\pi_1(X,x_0) \\to \\pi_1(X,x1) defined by \\beta p([f]) := [prev∗f∗p] for all [f] \\in \\pi_1(X,x_0).      If p is a path in X from x_0 to x1, then \\beta p: \\pi_1(X,x_0) \\to \\pi_1(X,x1) is an isomorphism of groups.      If X is a path-connected space, then \\pi_1(X) is independent of basepoint, up to isomorphism.      A space X is 0-connected if X is path-connected. A space X is 1-connected, or simply connected, if X is path-connected and \\pi_1(X) = 1.     Homomorphisms induced by continuous maps    A pointed space is a pair (X,x_0) in which X is a topological space and x_0 \\in X. A function h:X \\to Y with h(x_0) = y_0 is a map of pointed spaces h:(X,x_0) \\to (Y,y_0).      Let h:(X,x_0) \\to (Y,y_0) be a continuous map of pointed spaces. The induced homomomorphism associated to h is the function h∗: \\pi_1(X,x_0) \\to \\pi_1(Y,y_0) defined by h∗([f]) := [h \\circ f] for all [f] \\in \\pi_1(X,x_0).     The function h∗ is also sometimes written \\pi_1(h).        If h:(X,x_0) \\to (Y,y_0) is a continuous map of pointed spaces, then h∗ is a (well-defined) group homomorphism.    If h:(X,x_0) \\to (Y,y_0) and k:(Y,y_0) \\to (Z,z0) are continuous maps of pointed spaces, then (k \\circ h)∗ = k∗ \\circ h∗.    For any pointed space (X,x_0), (1(X,x_0))∗ = 1\\pi_1(X,x_0).           Let X be a topological space and let x_0,x1 \\in X. Let h:X \\to Y be a continuous function, and let h0:(X,x_0) \\to (Y,h(x_0)) and h1:(X,x1) \\to (Y,h(x1)) be the corresponding maps of pointed spaces. If p:I \\to X is a path from x_0 to x1, then \\beta h \\circ p \\circ (h0)∗ = (h1)∗ \\circ \\beta p.      If X and Y are path-connected spaces and X \\simeq Y, then \\pi_1(X) \\cong \\pi_1(Y).      The isomorphism class of the fundamental group is a homotopy type invariant for PC spaces.      If X is a contractible space then \\pi_1(X) = 1.      If X and Y are homotopy equivalent path-connected spaces, then \\pi_1(X) is abelian [respectively, finite] if and only if \\pi_1(Y) is abelian [respectively, finite].     Interactions with constructions    If X and Y are PC topological spaces and X \\times Y has the product topology, then \\pi_1(X \\times Y) \\cong \\pi_1(X) \\times \\pi_1(Y).        If A is a subspace of X, then \\pi_1(A) might not be a subgroup of \\pi_1(X).    For equivalence relation \\sim on a space X, \\pi_1(X\/\\sim ) might not be a quotient (group) of \\pi_1(X).        If r:X \\to A is a retraction and i:A \\to X is the inclusion, then r∗ is onto and i∗ is one-to-one.      Let A be a PC subspace of a PC topological space X, and let a0 \\in A. Let i: A \\to X be the inclusion map, and let i∗: \\pi_1(A,a0) \\to \\pi_1(A,a0) be the induced homomorphism. Then i∗ is onto if and only if every path in X with endpoints in A is path homotopic to a path in A.     "
},
{
  "id": "def-5.17",
  "level": "2",
  "url": "sec-group-homs.html#def-5.17",
  "type": "Definition",
  "number": "5.2.1",
  "title": "",
  "body": "  Let p:I \\to X be a path in a space X from x_0 to x1. The change of basepoint homomorphism induced by p is the function \\beta p: \\pi_1(X,x_0) \\to \\pi_1(X,x1) defined by \\beta p([f]) := [prev∗f∗p] for all [f] \\in \\pi_1(X,x_0).   "
},
{
  "id": "thm-5.18",
  "level": "2",
  "url": "sec-group-homs.html#thm-5.18",
  "type": "Theorem",
  "number": "5.2.2",
  "title": "",
  "body": "  If p is a path in X from x_0 to x1, then \\beta p: \\pi_1(X,x_0) \\to \\pi_1(X,x1) is an isomorphism of groups.   "
},
{
  "id": "cor-5.20",
  "level": "2",
  "url": "sec-group-homs.html#cor-5.20",
  "type": "Corollary",
  "number": "5.2.3",
  "title": "",
  "body": "  If X is a path-connected space, then \\pi_1(X) is independent of basepoint, up to isomorphism.   "
},
{
  "id": "def-5.22",
  "level": "2",
  "url": "sec-group-homs.html#def-5.22",
  "type": "Definition",
  "number": "5.2.4",
  "title": "",
  "body": "  A space X is 0-connected if X is path-connected. A space X is 1-connected, or simply connected, if X is path-connected and \\pi_1(X) = 1.   "
},
{
  "id": "def-5.24",
  "level": "2",
  "url": "sec-group-homs.html#def-5.24",
  "type": "Definition",
  "number": "5.2.5",
  "title": "",
  "body": "  A pointed space is a pair (X,x_0) in which X is a topological space and x_0 \\in X. A function h:X \\to Y with h(x_0) = y_0 is a map of pointed spaces h:(X,x_0) \\to (Y,y_0).   "
},
{
  "id": "def-5.25",
  "level": "2",
  "url": "sec-group-homs.html#def-5.25",
  "type": "Definition",
  "number": "5.2.6",
  "title": "",
  "body": "  Let h:(X,x_0) \\to (Y,y_0) be a continuous map of pointed spaces. The induced homomomorphism associated to h is the function h∗: \\pi_1(X,x_0) \\to \\pi_1(Y,y_0) defined by h∗([f]) := [h \\circ f] for all [f] \\in \\pi_1(X,x_0).   "
},
{
  "id": "remark-18",
  "level": "2",
  "url": "sec-group-homs.html#remark-18",
  "type": "Remark",
  "number": "5.2.7",
  "title": "",
  "body": " The function h∗ is also sometimes written \\pi_1(h).  "
},
{
  "id": "prop-5.28",
  "level": "2",
  "url": "sec-group-homs.html#prop-5.28",
  "type": "Proposition",
  "number": "5.2.8",
  "title": "",
  "body": "     If h:(X,x_0) \\to (Y,y_0) is a continuous map of pointed spaces, then h∗ is a (well-defined) group homomorphism.    If h:(X,x_0) \\to (Y,y_0) and k:(Y,y_0) \\to (Z,z0) are continuous maps of pointed spaces, then (k \\circ h)∗ = k∗ \\circ h∗.    For any pointed space (X,x_0), (1(X,x_0))∗ = 1\\pi_1(X,x_0).      "
},
{
  "id": "thm-5.30",
  "level": "2",
  "url": "sec-group-homs.html#thm-5.30",
  "type": "Theorem",
  "number": "5.2.9",
  "title": "",
  "body": "  Let X be a topological space and let x_0,x1 \\in X. Let h:X \\to Y be a continuous function, and let h0:(X,x_0) \\to (Y,h(x_0)) and h1:(X,x1) \\to (Y,h(x1)) be the corresponding maps of pointed spaces. If p:I \\to X is a path from x_0 to x1, then \\beta h \\circ p \\circ (h0)∗ = (h1)∗ \\circ \\beta p.   "
},
{
  "id": "thm-5.32",
  "level": "2",
  "url": "sec-group-homs.html#thm-5.32",
  "type": "Theorem",
  "number": "5.2.10",
  "title": "",
  "body": "  If X and Y are path-connected spaces and X \\simeq Y, then \\pi_1(X) \\cong \\pi_1(Y).   "
},
{
  "id": "cor-5.33",
  "level": "2",
  "url": "sec-group-homs.html#cor-5.33",
  "type": "Corollary",
  "number": "5.2.11",
  "title": "",
  "body": "  The isomorphism class of the fundamental group is a homotopy type invariant for PC spaces.   "
},
{
  "id": "cor-5.35",
  "level": "2",
  "url": "sec-group-homs.html#cor-5.35",
  "type": "Corollary",
  "number": "5.2.12",
  "title": "",
  "body": "  If X is a contractible space then \\pi_1(X) = 1.   "
},
{
  "id": "cor-5.37",
  "level": "2",
  "url": "sec-group-homs.html#cor-5.37",
  "type": "Corollary",
  "number": "5.2.13",
  "title": "",
  "body": "  If X and Y are homotopy equivalent path-connected spaces, then \\pi_1(X) is abelian [respectively, finite] if and only if \\pi_1(Y) is abelian [respectively, finite].   "
},
{
  "id": "thm-5.40",
  "level": "2",
  "url": "sec-group-homs.html#thm-5.40",
  "type": "Theorem",
  "number": "5.2.14",
  "title": "",
  "body": "  If X and Y are PC topological spaces and X \\times Y has the product topology, then \\pi_1(X \\times Y) \\cong \\pi_1(X) \\times \\pi_1(Y).   "
},
{
  "id": "remark-19",
  "level": "2",
  "url": "sec-group-homs.html#remark-19",
  "type": "Remark",
  "number": "5.2.15",
  "title": "",
  "body": "    If A is a subspace of X, then \\pi_1(A) might not be a subgroup of \\pi_1(X).    For equivalence relation \\sim on a space X, \\pi_1(X\/\\sim ) might not be a quotient (group) of \\pi_1(X).     "
},
{
  "id": "thm-5.43",
  "level": "2",
  "url": "sec-group-homs.html#thm-5.43",
  "type": "Theorem",
  "number": "5.2.16",
  "title": "",
  "body": "  If r:X \\to A is a retraction and i:A \\to X is the inclusion, then r∗ is onto and i∗ is one-to-one.   "
},
{
  "id": "thm-5.44",
  "level": "2",
  "url": "sec-group-homs.html#thm-5.44",
  "type": "Theorem",
  "number": "5.2.17",
  "title": "",
  "body": "  Let A be a PC subspace of a PC topological space X, and let a0 \\in A. Let i: A \\to X be the inclusion map, and let i∗: \\pi_1(A,a0) \\to \\pi_1(A,a0) be the induced homomorphism. Then i∗ is onto if and only if every path in X with endpoints in A is path homotopic to a path in A.   "
},
{
  "id": "sec-pi1S1",
  "level": "1",
  "url": "sec-pi1S1.html",
  "type": "Section",
  "number": "5.3",
  "title": "<span class=\"process-math\">\\(\\pi_1(S^1)\\)<\/span>",
  "body": "   For each integer n, let ωn be the loop in S^1 defined by ωn(s) := ( cos(2 \\pi n s), sin(2 \\pi n s) ) for all s \\in I. Then [ωm][ωn] = [ωm+n] in \\pi_1(S^1,(1,0)).    Path and Path Homotopy Lifting Theorems (PPHLT) for S^1   Let p: R \\to S^1 be defined by p(t) := (cos(2\\pi t), sin(2\\pi t)) for all t \\in R.   (PLT) Given a path f: (I,0) \\to (S^1,(1,0)), there is a unique path f\": (I,0) \\to (R,0) such that p \\circ f\" = f.    (PHLT) Given a path homotopy H: (I \\times I,(0,0)) \\to (S^1,(1,0)) there is a unique path homotopy H\": (I \\times I,(0,0)) \\to (R,0) such that p \\circ H\" = H. Moreover, if H is a path homotopy between two paths f,g: (I,0) \\to (S^1,(1,0)), then H\" is a path homotopy between the \"lifts\" f\",g\": (I,0) \\to (R,0) of f,g from the PLT.       "
},
{
  "id": "prop-5.49",
  "level": "2",
  "url": "sec-pi1S1.html#prop-5.49",
  "type": "Proposition",
  "number": "5.3.1",
  "title": "",
  "body": "  For each integer n, let ωn be the loop in S^1 defined by ωn(s) := ( cos(2 \\pi n s), sin(2 \\pi n s) ) for all s \\in I. Then [ωm][ωn] = [ωm+n] in \\pi_1(S^1,(1,0)).   "
},
{
  "id": "thm-5.50",
  "level": "2",
  "url": "sec-pi1S1.html#thm-5.50",
  "type": "Theorem",
  "number": "5.3.2",
  "title": "Path and Path Homotopy Lifting Theorems (PPHLT) for S^1.",
  "body": "Path and Path Homotopy Lifting Theorems (PPHLT) for S^1   Let p: R \\to S^1 be defined by p(t) := (cos(2\\pi t), sin(2\\pi t)) for all t \\in R.   (PLT) Given a path f: (I,0) \\to (S^1,(1,0)), there is a unique path f\": (I,0) \\to (R,0) such that p \\circ f\" = f.    (PHLT) Given a path homotopy H: (I \\times I,(0,0)) \\to (S^1,(1,0)) there is a unique path homotopy H\": (I \\times I,(0,0)) \\to (R,0) such that p \\circ H\" = H. Moreover, if H is a path homotopy between two paths f,g: (I,0) \\to (S^1,(1,0)), then H\" is a path homotopy between the \"lifts\" f\",g\": (I,0) \\to (R,0) of f,g from the PLT.      "
},
{
  "id": "sec-present",
  "level": "1",
  "url": "sec-present.html",
  "type": "Section",
  "number": "5.4",
  "title": "Presenting and Decomposing Groups",
  "body": "Presenting and Decomposing Groups  Review and presentations  Review of normal subgroups, cosets, quotients, and generators for subgroups and normal subgroups    Let A be a set, let A' :=\\{a-1 | a \\in A\\} be a set that bijects to A, let (A \\cup A')* be the set of all words written with the letters of A \\cup A' (including the empty word, denoted 1), and let \\sim be the smallest equivalence relation on (A \\cup A')* such that xaa-1y \\sim xy \\sim xa-1ay for all a \\in A and x,y \\in (A \\cup A')*. The free group on A, denoted F(A), is the quotient set (A \\cup A')*\/\\sim with the group operation [v][w] := [vw] where vw is the concatenation of the words v and w. In the case that |A| = n, this group is also denoted Fn.      Let A be a set and let R be a subset of F(A). The normal subgroup generated by R is \\langle R \\rangle^N :=\\{u1r1e1u1-1 ··· ukrkekuk-1 | k \\geq 0, and ri \\in R, ei \\in\\{1,-1\\}, and ui \\in F(A) for each 1 \\leq i \\leq k\\}.      Let A be a set and let R be a subset of F(A). The group presented by the presentation \\langle A | R \\rangle is the quotient group F(A)\/\\langle R \\rangle^N. The set A is the set of generators, the set R is the set of relators, and the set of equations\\{r = 1 | r \\in R\\} is the set of relations of the presentation.      For a set A, R \\sse F(A), and words v,w \\in (A \\cup A')*, the equation v = w means that v and w are the same word, v =F(A) w means that [v] = [w] in the group F(A), and v =G w means that [v]\\langle R \\rangle^N = [w]\\langle R \\rangle^N in the group G := \\langle A | R \\rangle.     The group \\langle A | R \\rangle is the largest group generated by A satisfying r =G 1 for all r \\in R.     A group G is finitely generated if G is a quotient of F(A) for some finite set A, and G is finitely presented if G = \\langle A | R \\rangle for some finite sets A and R.     Examples     If G is a group, then G has a presentation; moreover, G is presented by G = \\langle G | ab = (ab) for all a,b \\in G \\rangle.    HBTP = \"Homomorphism Building Theorem for presentations\"   Let G = \\langle A | R \\rangle, let H be a group, and let f:A \\to H be a function satisfying the property that for all words b1e1 ··· bmem \\in R (with each bi \\in A and ei \\in\\{1,-1\\}), f(b1)e1 ··· f(bm)em =H 1. Then there is a unique group homomorphism h:G \\to H satisfying h(a) = f(a) for all a \\in A.      Let A be a set, let R \\sse F(A), let b be a letter not in A, let w \\in F(A), and let r \\in \\langle R \\rangle^N. The operations \\langle A | R \\rangle ↔ \\langle A \\cup\\{b\\} | R \\cup\\{b = w\\} \\rangle and \\langle A | R \\rangle ↔ \\langle A | R \\cup\\{r\\} \\rangle are Tietze transformations.      If \\langle A | R \\rangle \\cong \\langle B | S \\rangle, then there is a finite sequence of Tietze transformations from \\langle A | R \\rangle to \\langle B | S \\rangle.     Building new groups from old -- or decomposing groups  Abelianization    The abelianization of a group G is the quotient group Gab := G\/[G,G] where [G,G] is the commutator subgroup [G,G] :=\\{aba-1b-1 | a,b \\in G\\}. The element aba-1b-1 of G is denoted [a,b] and called the commutator of a with b.     There are 3 views of Gab: Using presentations (if G = \\langle A | R \\rangle, then Gab = \\langle A | R \\cup\\{aba-1b-1 | a,b \\in A\\} \\rangle), as the quotient of G by its commutator subgroup (as in Def 5.115), and as the largest abelian group that is a quotient of G.     If G and H are groups and Gab ≇ Hab, then G ≇ H.     Examples    Direct products    Let g_\\alpha be a group, and write g_\\alpha = \\langle A_\\alpha | R\\alpha \\rangle, for each \\alpha. The direct sum of the g_\\alpha is the group ⊕ g_\\alpha = \\langle \\cup \\alpha A_\\alpha | \\cup \\alpha R\\alpha \\cup\\{ab = ba | a \\in g_\\alpha, b \\in \\alpha, \\alpha \\ne \\beta \\} \\rangle.     There are 3 views of G \\times H: Using presentations (if G = \\langle A | R \\rangle and H = \\langle B | S \\rangle, then G \\times H = \\langle A \\cup B | R \\cup S \\cup\\{ab = ba | a \\in A, b \\in B\\} >), as a Cartesian product set with componentwise multiplication, and as the largest group generated by G and H such that the subgroups G and H commute.    Examples    Free Products    Let g_\\alpha be a group, and write g_\\alpha = \\langle A_\\alpha | R\\alpha \\rangle, for each \\alpha. The free product of the g_\\alpha is the group ∗\\alpha g_\\alpha = \\langle \\cup \\alpha A_\\alpha | \\cup \\alpha R\\alpha \\rangle.      Let g_\\alpha be a group for all \\alpha. A reduced sequence for the collection of groups g_\\alpha is a sequence of group elements (or word) of the form g1 ··· gk such that k \\geq 0, for each i \\in\\{1,\\dots,k\\} there is an index \\alpha i such that gi \\in g_\\alpha i\\setminus\\{1g_\\alpha i\\}, and for each i \\in\\{1,\\dots,k-1\\}, \\alpha i \\ne \\alpha i+1. In the case of two groups G and H, a reduced sequence for G,H is a word of one of the forms g1h1 ··· gkhk, g1h1 ··· hk-1gk, h1g2 ··· gkhk, or h1g2 ··· hk-1gk, such that k \\geq 0, and each gi \\in G\\setminus\\{1G\\} and hi \\in H\\setminus\\{1H\\}.      If G and H are groups, then G ∗ H is isomorphic to the set of reduced sequences for G,H with group operation given by concatenation and reduction (in the groups G and H) to a reduced sequence.     There are 3 views of G ∗ H: Using presentations (if G = \\langle A | R \\rangle and H = \\langle B | S \\rangle, then G ∗ H\\langle = \\langle A \\cup B | R \\cup S \\rangle), as the set of reduced sequences for G,H (as in Lemma 5.105), and as the largest group generated by G and H.    Examples   HBTFP = \"Homomorphism Building Theorem for free products\"   Let g_\\alpha be a group for each \\alpha, let J be a group, and let f_\\alpha :g_\\alpha \\to J be a homomorphism for each \\alpha. Then there is a unique group homomorphism h:∗\\alpha g_\\alpha \\to J satisfying h(g) = f(g) for all g \\in g_\\alpha, for all \\alpha.     Examples    Free products with amalgamation    Let G, H, and K be groups, and let r:K \\to G and s:K \\to H be group homomorphisms. The associated free product with amalgamation, or amalgamated product, is the quotient group G ∗K H := (G ∗ H) \/ \\langle{r(k)s(k)-1 | k \\in K\\}\\rangle^N.     There are 3 views of G ∗K H: Using presentations (if G = \\langle A | R \\rangle, H = \\langle B | S \\rangle, and K = \\langle C \\rangle, then G ∗K H = \\langle A \\cup B | R \\cup S \\cup\\{r(k)s(k)-1 | k \\in K\\}\\rangle), using cosets represented by reduced sequences, and as the largest group generated by G and H glued along the common subgroups r(K) in G and s(K) in H.   HBTAP = \"Homomorphism Building Theorem for amalgamated products\"   Let G, H, K, and J be groups, and r:K \\to G, s:K \\to H, a:G \\to J and b:H \\to J be homomorphisms satisfying the property that a \\circ r = b \\circ s. Then there is a unique group homomorphism c:G ∗K H \\to J satisfying c(g) = a(g) for all g \\in G and c(h) = b(h) for all h \\in H.     Examples     "
},
{
  "id": "def-5.70",
  "level": "2",
  "url": "sec-present.html#def-5.70",
  "type": "Definition",
  "number": "5.4.1",
  "title": "",
  "body": "  Let A be a set, let A' :=\\{a-1 | a \\in A\\} be a set that bijects to A, let (A \\cup A')* be the set of all words written with the letters of A \\cup A' (including the empty word, denoted 1), and let \\sim be the smallest equivalence relation on (A \\cup A')* such that xaa-1y \\sim xy \\sim xa-1ay for all a \\in A and x,y \\in (A \\cup A')*. The free group on A, denoted F(A), is the quotient set (A \\cup A')*\/\\sim with the group operation [v][w] := [vw] where vw is the concatenation of the words v and w. In the case that |A| = n, this group is also denoted Fn.   "
},
{
  "id": "def-5.75",
  "level": "2",
  "url": "sec-present.html#def-5.75",
  "type": "Definition",
  "number": "5.4.2",
  "title": "",
  "body": "  Let A be a set and let R be a subset of F(A). The normal subgroup generated by R is \\langle R \\rangle^N :=\\{u1r1e1u1-1 ··· ukrkekuk-1 | k \\geq 0, and ri \\in R, ei \\in\\{1,-1\\}, and ui \\in F(A) for each 1 \\leq i \\leq k\\}.   "
},
{
  "id": "def-5.77",
  "level": "2",
  "url": "sec-present.html#def-5.77",
  "type": "Definition",
  "number": "5.4.3",
  "title": "",
  "body": "  Let A be a set and let R be a subset of F(A). The group presented by the presentation \\langle A | R \\rangle is the quotient group F(A)\/\\langle R \\rangle^N. The set A is the set of generators, the set R is the set of relators, and the set of equations\\{r = 1 | r \\in R\\} is the set of relations of the presentation.   "
},
{
  "id": "def-5.78",
  "level": "2",
  "url": "sec-present.html#def-5.78",
  "type": "Definition",
  "number": "5.4.4",
  "title": "",
  "body": "  For a set A, R \\sse F(A), and words v,w \\in (A \\cup A')*, the equation v = w means that v and w are the same word, v =F(A) w means that [v] = [w] in the group F(A), and v =G w means that [v]\\langle R \\rangle^N = [w]\\langle R \\rangle^N in the group G := \\langle A | R \\rangle.   "
},
{
  "id": "remark-20",
  "level": "2",
  "url": "sec-present.html#remark-20",
  "type": "Remark",
  "number": "5.4.5",
  "title": "",
  "body": " The group \\langle A | R \\rangle is the largest group generated by A satisfying r =G 1 for all r \\in R.  "
},
{
  "id": "def-5.80",
  "level": "2",
  "url": "sec-present.html#def-5.80",
  "type": "Definition",
  "number": "5.4.6",
  "title": "",
  "body": "  A group G is finitely generated if G is a quotient of F(A) for some finite set A, and G is finitely presented if G = \\langle A | R \\rangle for some finite sets A and R.   "
},
{
  "id": "example-38",
  "level": "2",
  "url": "sec-present.html#example-38",
  "type": "Example",
  "number": "5.4.7",
  "title": "",
  "body": " Examples  "
},
{
  "id": "lem-5.83",
  "level": "2",
  "url": "sec-present.html#lem-5.83",
  "type": "Lemma",
  "number": "5.4.8",
  "title": "",
  "body": "  If G is a group, then G has a presentation; moreover, G is presented by G = \\langle G | ab = (ab) for all a,b \\in G \\rangle.   "
},
{
  "id": "thm-5.85",
  "level": "2",
  "url": "sec-present.html#thm-5.85",
  "type": "Theorem",
  "number": "5.4.9",
  "title": "HBTP = \"Homomorphism Building Theorem for presentations\".",
  "body": "HBTP = \"Homomorphism Building Theorem for presentations\"   Let G = \\langle A | R \\rangle, let H be a group, and let f:A \\to H be a function satisfying the property that for all words b1e1 ··· bmem \\in R (with each bi \\in A and ei \\in\\{1,-1\\}), f(b1)e1 ··· f(bm)em =H 1. Then there is a unique group homomorphism h:G \\to H satisfying h(a) = f(a) for all a \\in A.   "
},
{
  "id": "def-5.87",
  "level": "2",
  "url": "sec-present.html#def-5.87",
  "type": "Definition",
  "number": "5.4.10",
  "title": "",
  "body": "  Let A be a set, let R \\sse F(A), let b be a letter not in A, let w \\in F(A), and let r \\in \\langle R \\rangle^N. The operations \\langle A | R \\rangle ↔ \\langle A \\cup\\{b\\} | R \\cup\\{b = w\\} \\rangle and \\langle A | R \\rangle ↔ \\langle A | R \\cup\\{r\\} \\rangle are Tietze transformations.   "
},
{
  "id": "thm-5.88",
  "level": "2",
  "url": "sec-present.html#thm-5.88",
  "type": "Theorem",
  "number": "5.4.11",
  "title": "",
  "body": "  If \\langle A | R \\rangle \\cong \\langle B | S \\rangle, then there is a finite sequence of Tietze transformations from \\langle A | R \\rangle to \\langle B | S \\rangle.   "
},
{
  "id": "def-5.95",
  "level": "2",
  "url": "sec-present.html#def-5.95",
  "type": "Definition",
  "number": "5.4.12",
  "title": "",
  "body": "  The abelianization of a group G is the quotient group Gab := G\/[G,G] where [G,G] is the commutator subgroup [G,G] :=\\{aba-1b-1 | a,b \\in G\\}. The element aba-1b-1 of G is denoted [a,b] and called the commutator of a with b.   "
},
{
  "id": "remark-21",
  "level": "2",
  "url": "sec-present.html#remark-21",
  "type": "Remark",
  "number": "5.4.13",
  "title": "",
  "body": " There are 3 views of Gab: Using presentations (if G = \\langle A | R \\rangle, then Gab = \\langle A | R \\cup\\{aba-1b-1 | a,b \\in A\\} \\rangle), as the quotient of G by its commutator subgroup (as in Def 5.115), and as the largest abelian group that is a quotient of G.  "
},
{
  "id": "prop-5.97",
  "level": "2",
  "url": "sec-present.html#prop-5.97",
  "type": "Proposition",
  "number": "5.4.14",
  "title": "",
  "body": "  If G and H are groups and Gab ≇ Hab, then G ≇ H.   "
},
{
  "id": "example-39",
  "level": "2",
  "url": "sec-present.html#example-39",
  "type": "Example",
  "number": "5.4.15",
  "title": "",
  "body": " Examples  "
},
{
  "id": "def-5.100",
  "level": "2",
  "url": "sec-present.html#def-5.100",
  "type": "Definition",
  "number": "5.4.16",
  "title": "",
  "body": "  Let g_\\alpha be a group, and write g_\\alpha = \\langle A_\\alpha | R\\alpha \\rangle, for each \\alpha. The direct sum of the g_\\alpha is the group ⊕ g_\\alpha = \\langle \\cup \\alpha A_\\alpha | \\cup \\alpha R\\alpha \\cup\\{ab = ba | a \\in g_\\alpha, b \\in \\alpha, \\alpha \\ne \\beta \\} \\rangle.   "
},
{
  "id": "remark-22",
  "level": "2",
  "url": "sec-present.html#remark-22",
  "type": "Remark",
  "number": "5.4.17",
  "title": "",
  "body": " There are 3 views of G \\times H: Using presentations (if G = \\langle A | R \\rangle and H = \\langle B | S \\rangle, then G \\times H = \\langle A \\cup B | R \\cup S \\cup\\{ab = ba | a \\in A, b \\in B\\} >), as a Cartesian product set with componentwise multiplication, and as the largest group generated by G and H such that the subgroups G and H commute.  "
},
{
  "id": "example-40",
  "level": "2",
  "url": "sec-present.html#example-40",
  "type": "Example",
  "number": "5.4.18",
  "title": "",
  "body": " Examples  "
},
{
  "id": "def-5.103",
  "level": "2",
  "url": "sec-present.html#def-5.103",
  "type": "Definition",
  "number": "5.4.19",
  "title": "",
  "body": "  Let g_\\alpha be a group, and write g_\\alpha = \\langle A_\\alpha | R\\alpha \\rangle, for each \\alpha. The free product of the g_\\alpha is the group ∗\\alpha g_\\alpha = \\langle \\cup \\alpha A_\\alpha | \\cup \\alpha R\\alpha \\rangle.   "
},
{
  "id": "def-5.104",
  "level": "2",
  "url": "sec-present.html#def-5.104",
  "type": "Definition",
  "number": "5.4.20",
  "title": "",
  "body": "  Let g_\\alpha be a group for all \\alpha. A reduced sequence for the collection of groups g_\\alpha is a sequence of group elements (or word) of the form g1 ··· gk such that k \\geq 0, for each i \\in\\{1,\\dots,k\\} there is an index \\alpha i such that gi \\in g_\\alpha i\\setminus\\{1g_\\alpha i\\}, and for each i \\in\\{1,\\dots,k-1\\}, \\alpha i \\ne \\alpha i+1. In the case of two groups G and H, a reduced sequence for G,H is a word of one of the forms g1h1 ··· gkhk, g1h1 ··· hk-1gk, h1g2 ··· gkhk, or h1g2 ··· hk-1gk, such that k \\geq 0, and each gi \\in G\\setminus\\{1G\\} and hi \\in H\\setminus\\{1H\\}.   "
},
{
  "id": "lem-5.105",
  "level": "2",
  "url": "sec-present.html#lem-5.105",
  "type": "Lemma",
  "number": "5.4.21",
  "title": "",
  "body": "  If G and H are groups, then G ∗ H is isomorphic to the set of reduced sequences for G,H with group operation given by concatenation and reduction (in the groups G and H) to a reduced sequence.   "
},
{
  "id": "remark-23",
  "level": "2",
  "url": "sec-present.html#remark-23",
  "type": "Remark",
  "number": "5.4.22",
  "title": "",
  "body": " There are 3 views of G ∗ H: Using presentations (if G = \\langle A | R \\rangle and H = \\langle B | S \\rangle, then G ∗ H\\langle = \\langle A \\cup B | R \\cup S \\rangle), as the set of reduced sequences for G,H (as in Lemma 5.105), and as the largest group generated by G and H.  "
},
{
  "id": "example-41",
  "level": "2",
  "url": "sec-present.html#example-41",
  "type": "Example",
  "number": "5.4.23",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-5.108",
  "level": "2",
  "url": "sec-present.html#thm-5.108",
  "type": "Theorem",
  "number": "5.4.24",
  "title": "HBTFP = \"Homomorphism Building Theorem for free products\".",
  "body": "HBTFP = \"Homomorphism Building Theorem for free products\"   Let g_\\alpha be a group for each \\alpha, let J be a group, and let f_\\alpha :g_\\alpha \\to J be a homomorphism for each \\alpha. Then there is a unique group homomorphism h:∗\\alpha g_\\alpha \\to J satisfying h(g) = f(g) for all g \\in g_\\alpha, for all \\alpha.   "
},
{
  "id": "example-42",
  "level": "2",
  "url": "sec-present.html#example-42",
  "type": "Example",
  "number": "5.4.25",
  "title": "",
  "body": " Examples  "
},
{
  "id": "def-5.110",
  "level": "2",
  "url": "sec-present.html#def-5.110",
  "type": "Definition",
  "number": "5.4.26",
  "title": "",
  "body": "  Let G, H, and K be groups, and let r:K \\to G and s:K \\to H be group homomorphisms. The associated free product with amalgamation, or amalgamated product, is the quotient group G ∗K H := (G ∗ H) \/ \\langle{r(k)s(k)-1 | k \\in K\\}\\rangle^N.   "
},
{
  "id": "remark-24",
  "level": "2",
  "url": "sec-present.html#remark-24",
  "type": "Remark",
  "number": "5.4.27",
  "title": "",
  "body": " There are 3 views of G ∗K H: Using presentations (if G = \\langle A | R \\rangle, H = \\langle B | S \\rangle, and K = \\langle C \\rangle, then G ∗K H = \\langle A \\cup B | R \\cup S \\cup\\{r(k)s(k)-1 | k \\in K\\}\\rangle), using cosets represented by reduced sequences, and as the largest group generated by G and H glued along the common subgroups r(K) in G and s(K) in H.  "
},
{
  "id": "thm-5.113",
  "level": "2",
  "url": "sec-present.html#thm-5.113",
  "type": "Theorem",
  "number": "5.4.28",
  "title": "HBTAP = \"Homomorphism Building Theorem for amalgamated products\".",
  "body": "HBTAP = \"Homomorphism Building Theorem for amalgamated products\"   Let G, H, K, and J be groups, and r:K \\to G, s:K \\to H, a:G \\to J and b:H \\to J be homomorphisms satisfying the property that a \\circ r = b \\circ s. Then there is a unique group homomorphism c:G ∗K H \\to J satisfying c(g) = a(g) for all g \\in G and c(h) = b(h) for all h \\in H.   "
},
{
  "id": "example-43",
  "level": "2",
  "url": "sec-present.html#example-43",
  "type": "Example",
  "number": "5.4.29",
  "title": "",
  "body": " Examples  "
},
{
  "id": "sec-svk",
  "level": "1",
  "url": "sec-svk.html",
  "type": "Section",
  "number": "5.5",
  "title": "SVK",
  "body": "SVK  SVK Theorem statement and first examples  SVK = \"Seifert-Van Kampen Theorem\"   Let X be a topological space with basepoint x_0 and PC subspaces A_\\alpha (for indices \\alpha in an index set J) such that each A_\\alpha is an open set in X containing x_0, every pairwise and triple intersection A_\\alpha \\cap A\\beta and A_\\alpha \\cap A\\beta \\cap Aγ is also PC, and X = \\cup \\alpha \\in J A_\\alpha. For each \\beta,γ \\in J, let iA\\beta Aγ: A\\beta \\cap Aγ \\to A\\beta be the inclusion map. Then \\pi_1(X) \\cong ∗\\alpha \\in J \\pi_1(A_\\alpha )\/N, where N is the normal subgroup generated by all elements of the form iA\\beta Aγ∗([w]) iAγ A\\beta ∗([w])-1 with [w] \\in \\pi_1(A\\beta \\cap Aγ) and \\beta,γ \\in J.    Examples    \\pi_1(Sn) = 1 for all n \\geq 2.      Let X be a disjoint union of singleton spaces V\\alpha =\\{v\\alpha \\} (for \\alpha \\in J) and spaces E\\beta (for \\beta \\in K) homeomorpic to I. For each \\beta \\in K, let s\\beta,t\\beta \\in J. Let \\sim be the equivalence relation on X generated by the relation 0\\beta \\sim vs\\beta and 1\\beta \\sim vt\\beta. The quotient space X\/\\sim is a graph. Each point [v\\alpha ] is a vertex of the graph X\/\\sim, and the image of each E\\beta is an edge of the graph.      A bouquet of n circles is a graph with one vertex and n edges.      A tree is a connected graph that does not have a nonempty edge path from a vertex back to itself that does not traverse any edge (in any direction) twice. A maximal tree in a graph X is a subgraph that is a tree an includes every vertex of X.      If X is a graph and T is a maximal tree in X, then \\pi_1(X) \\cong F(S), where S is the set of edges in X that are not in T.         \\pi_1(T^2) \\cong \\Z 2.    \\pi_1(K2) \\cong \\langle a,b | ba = ab-1 \\rangle.    More results from the exercises\\dots         Classification of surfaces    An n-manifold is a T_2 space X with a countable basis such that each point p of X is contained in an open subset Up of X that (as a subspace of X) is homeomorphic to \\R^n (with the Euclidean topology). A surface is a 2-manifold.      Let S^1 and S^2 be two surfaces. For 1 \\leq i \\leq 2, let Ci \\sse Si be a closed set that, as a subspace, has a homeomorphism hi: Ci \\to D2. Let Ui := hi-1(B((0,0),1)) and let Si\\setminus Ui have the subspace topology from Si. Let X := (S^1\\setminus U1) ∐ (S^2\\setminus U2) have the disjoint union topology, and let \\sim be the smallest equivalence relation on X for which h1-1(p) \\sim h2-1(p) for all p \\in S^1. The quotient space X\/\\sim is the connected sum of S^1 and S^2, and is denoted S^1 # S^2.      If S^1 and S^2 are compact connected surfaces, then so is S^1 # S^2.      If S^1 is a surface, then S^1 # S^2 \\cong S^1.     Examples     Let n \\geq 1.   Let Y := #n T^2. (a-i) The space Y is homeomorphic to a quotient of a Euclidean 4n-gon with gluings labeled (counterclockwise) by a1b1a1-1b1-1 a2b2a2-1b2-1 ··· anbnan-1bn-1. (a-ii) \\pi_1(Y) \\cong \\langle a1,b1, \\dots,an, bn | [a1,b1] ··· [an,bn] = 1 \\rangle. (a-ii) \\pi_1(Y)ab \\cong \\Z 2n.    Let Z := #n P^2. (b-i) The space Z is homeomorphic to a quotient of a Euclidean 2n-gon with gluings labeled (counterclockwise) by a1a1 a2a2 ··· anan. (b-ii) \\pi_1(Z) \\cong \\langle a1, \\dots,an | a12 a22 ··· an2 = 1 \\rangle. (b-ii) \\pi_1(Z)ab \\cong \\Z n-1 \\times \\Z \/2.    T^2 # P^2 \\cong #3 P^2       Classification of Surfaces Theorem   Every compact connected surface is homeomorphic to exactly one of S^2, #n T^2, or #n P^2 for some natural number n.     Proof and corollaries of the Seifert-Van Kampen Theorem  Outline:   Building the homomorphism with the HBT,    using the Lebesgue Number Lemma and the \"seashell method\" to prove onto, and    using LNL again to prove 1-1.       Let X_\\alpha be a topological space for all \\alpha in J such that X\\beta \\cap Xγ = \\es for all \\beta \\ne γ \\in J, and let p_\\alpha \\in X_\\alpha for all \\alpha. Let ∐\\alpha X_\\alpha be the union of the X_\\alpha with the disjoint union topology, and let \\sim be the equivalence relation on ∐\\alpha X_\\alpha generated by p_\\beta \\sim pγ for all \\beta,γ \\in J. The quotient space (∐\\alpha X_\\alpha )\/\\sim is the wedge product of the spaces ∐\\alpha X_\\alpha (with respect to the basepoints p_\\alpha ); this space is also denoted ∨\\alpha X_\\alpha.      For each \\alpha let X_\\alpha be a space with basepoint p_\\alpha \\in X_\\alpha, and let p := [p_\\alpha ] be the basepoint of the wedge product ∨\\alpha X_\\alpha. If for each \\alpha the singleton space\\{p_\\alpha \\} is a deformation retract of an open set U\\alpha in X_\\alpha in X containing p_\\alpha, then \\pi_1(∨\\alpha X_\\alpha,p) \\cong ∗\\alpha \\pi_1(X_\\alpha,p_\\alpha ) is a free product.     "
},
{
  "id": "thm-5.120",
  "level": "2",
  "url": "sec-svk.html#thm-5.120",
  "type": "Theorem",
  "number": "5.5.1",
  "title": "SVK = \"Seifert-Van Kampen Theorem\".",
  "body": "SVK = \"Seifert-Van Kampen Theorem\"   Let X be a topological space with basepoint x_0 and PC subspaces A_\\alpha (for indices \\alpha in an index set J) such that each A_\\alpha is an open set in X containing x_0, every pairwise and triple intersection A_\\alpha \\cap A\\beta and A_\\alpha \\cap A\\beta \\cap Aγ is also PC, and X = \\cup \\alpha \\in J A_\\alpha. For each \\beta,γ \\in J, let iA\\beta Aγ: A\\beta \\cap Aγ \\to A\\beta be the inclusion map. Then \\pi_1(X) \\cong ∗\\alpha \\in J \\pi_1(A_\\alpha )\/N, where N is the normal subgroup generated by all elements of the form iA\\beta Aγ∗([w]) iAγ A\\beta ∗([w])-1 with [w] \\in \\pi_1(A\\beta \\cap Aγ) and \\beta,γ \\in J.   "
},
{
  "id": "thm-5.123",
  "level": "2",
  "url": "sec-svk.html#thm-5.123",
  "type": "Theorem",
  "number": "5.5.2",
  "title": "",
  "body": "  \\pi_1(Sn) = 1 for all n \\geq 2.   "
},
{
  "id": "def-5.125",
  "level": "2",
  "url": "sec-svk.html#def-5.125",
  "type": "Definition",
  "number": "5.5.3",
  "title": "",
  "body": "  Let X be a disjoint union of singleton spaces V\\alpha =\\{v\\alpha \\} (for \\alpha \\in J) and spaces E\\beta (for \\beta \\in K) homeomorpic to I. For each \\beta \\in K, let s\\beta,t\\beta \\in J. Let \\sim be the equivalence relation on X generated by the relation 0\\beta \\sim vs\\beta and 1\\beta \\sim vt\\beta. The quotient space X\/\\sim is a graph. Each point [v\\alpha ] is a vertex of the graph X\/\\sim, and the image of each E\\beta is an edge of the graph.   "
},
{
  "id": "def-5.126",
  "level": "2",
  "url": "sec-svk.html#def-5.126",
  "type": "Definition",
  "number": "5.5.4",
  "title": "",
  "body": "  A bouquet of n circles is a graph with one vertex and n edges.   "
},
{
  "id": "def-5.128",
  "level": "2",
  "url": "sec-svk.html#def-5.128",
  "type": "Definition",
  "number": "5.5.5",
  "title": "",
  "body": "  A tree is a connected graph that does not have a nonempty edge path from a vertex back to itself that does not traverse any edge (in any direction) twice. A maximal tree in a graph X is a subgraph that is a tree an includes every vertex of X.   "
},
{
  "id": "thm-5.130",
  "level": "2",
  "url": "sec-svk.html#thm-5.130",
  "type": "Theorem",
  "number": "5.5.6",
  "title": "",
  "body": "  If X is a graph and T is a maximal tree in X, then \\pi_1(X) \\cong F(S), where S is the set of edges in X that are not in T.   "
},
{
  "id": "prop-5.133",
  "level": "2",
  "url": "sec-svk.html#prop-5.133",
  "type": "Proposition",
  "number": "5.5.7",
  "title": "",
  "body": "     \\pi_1(T^2) \\cong \\Z 2.    \\pi_1(K2) \\cong \\langle a,b | ba = ab-1 \\rangle.    More results from the exercises\\dots      "
},
{
  "id": "def-5.140",
  "level": "2",
  "url": "sec-svk.html#def-5.140",
  "type": "Definition",
  "number": "5.5.8",
  "title": "",
  "body": "  An n-manifold is a T_2 space X with a countable basis such that each point p of X is contained in an open subset Up of X that (as a subspace of X) is homeomorphic to \\R^n (with the Euclidean topology). A surface is a 2-manifold.   "
},
{
  "id": "def-5.142",
  "level": "2",
  "url": "sec-svk.html#def-5.142",
  "type": "Definition",
  "number": "5.5.9",
  "title": "",
  "body": "  Let S^1 and S^2 be two surfaces. For 1 \\leq i \\leq 2, let Ci \\sse Si be a closed set that, as a subspace, has a homeomorphism hi: Ci \\to D2. Let Ui := hi-1(B((0,0),1)) and let Si\\setminus Ui have the subspace topology from Si. Let X := (S^1\\setminus U1) ∐ (S^2\\setminus U2) have the disjoint union topology, and let \\sim be the smallest equivalence relation on X for which h1-1(p) \\sim h2-1(p) for all p \\in S^1. The quotient space X\/\\sim is the connected sum of S^1 and S^2, and is denoted S^1 # S^2.   "
},
{
  "id": "thm-5.144",
  "level": "2",
  "url": "sec-svk.html#thm-5.144",
  "type": "Theorem",
  "number": "5.5.10",
  "title": "",
  "body": "  If S^1 and S^2 are compact connected surfaces, then so is S^1 # S^2.   "
},
{
  "id": "prop-5.146",
  "level": "2",
  "url": "sec-svk.html#prop-5.146",
  "type": "Proposition",
  "number": "5.5.11",
  "title": "",
  "body": "  If S^1 is a surface, then S^1 # S^2 \\cong S^1.   "
},
{
  "id": "example-44",
  "level": "2",
  "url": "sec-svk.html#example-44",
  "type": "Example",
  "number": "5.5.12",
  "title": "",
  "body": " Examples  "
},
{
  "id": "prop-5.150",
  "level": "2",
  "url": "sec-svk.html#prop-5.150",
  "type": "Proposition",
  "number": "5.5.13",
  "title": "",
  "body": "  Let n \\geq 1.   Let Y := #n T^2. (a-i) The space Y is homeomorphic to a quotient of a Euclidean 4n-gon with gluings labeled (counterclockwise) by a1b1a1-1b1-1 a2b2a2-1b2-1 ··· anbnan-1bn-1. (a-ii) \\pi_1(Y) \\cong \\langle a1,b1, \\dots,an, bn | [a1,b1] ··· [an,bn] = 1 \\rangle. (a-ii) \\pi_1(Y)ab \\cong \\Z 2n.    Let Z := #n P^2. (b-i) The space Z is homeomorphic to a quotient of a Euclidean 2n-gon with gluings labeled (counterclockwise) by a1a1 a2a2 ··· anan. (b-ii) \\pi_1(Z) \\cong \\langle a1, \\dots,an | a12 a22 ··· an2 = 1 \\rangle. (b-ii) \\pi_1(Z)ab \\cong \\Z n-1 \\times \\Z \/2.    T^2 # P^2 \\cong #3 P^2      "
},
{
  "id": "thm-5.152",
  "level": "2",
  "url": "sec-svk.html#thm-5.152",
  "type": "Theorem",
  "number": "5.5.14",
  "title": "Classification of Surfaces Theorem.",
  "body": "Classification of Surfaces Theorem   Every compact connected surface is homeomorphic to exactly one of S^2, #n T^2, or #n P^2 for some natural number n.   "
},
{
  "id": "def-5.160",
  "level": "2",
  "url": "sec-svk.html#def-5.160",
  "type": "Definition",
  "number": "5.5.15",
  "title": "",
  "body": "  Let X_\\alpha be a topological space for all \\alpha in J such that X\\beta \\cap Xγ = \\es for all \\beta \\ne γ \\in J, and let p_\\alpha \\in X_\\alpha for all \\alpha. Let ∐\\alpha X_\\alpha be the union of the X_\\alpha with the disjoint union topology, and let \\sim be the equivalence relation on ∐\\alpha X_\\alpha generated by p_\\beta \\sim pγ for all \\beta,γ \\in J. The quotient space (∐\\alpha X_\\alpha )\/\\sim is the wedge product of the spaces ∐\\alpha X_\\alpha (with respect to the basepoints p_\\alpha ); this space is also denoted ∨\\alpha X_\\alpha.   "
},
{
  "id": "thm-5.162",
  "level": "2",
  "url": "sec-svk.html#thm-5.162",
  "type": "Theorem",
  "number": "5.5.16",
  "title": "",
  "body": "  For each \\alpha let X_\\alpha be a space with basepoint p_\\alpha \\in X_\\alpha, and let p := [p_\\alpha ] be the basepoint of the wedge product ∨\\alpha X_\\alpha. If for each \\alpha the singleton space\\{p_\\alpha \\} is a deformation retract of an open set U\\alpha in X_\\alpha in X containing p_\\alpha, then \\pi_1(∨\\alpha X_\\alpha,p) \\cong ∗\\alpha \\pi_1(X_\\alpha,p_\\alpha ) is a free product.   "
},
{
  "id": "sec-presenting-spaces",
  "level": "1",
  "url": "sec-presenting-spaces.html",
  "type": "Section",
  "number": "5.6",
  "title": "Presenting Spaces and the 2-way Street Theorem",
  "body": "Presenting Spaces and the 2-way Street Theorem  CW complexes    Let X(0) be a set of points with the discrete topology. For each n \\geq 1, form the space X(n) from X(n-1) by: For each \\alpha in an index set Jn, let D\\alpha n be a copy of the closed unit disk Dn in \\R^n (with Euclidean topology), and let φ\\alpha : S\\alpha n-1 \\to X(n-1) be a continuous function. Let Zn := X(n-1) ∐ (∐\\alpha \\in Jn D\\alpha n) have the disjoint union topology, and let \\sim be the minimal equivalence relation on this space such that d \\sim φ\\alpha (d) for all d \\in S\\alpha n-1 and \\alpha \\in Jn. Define X(n) be the quotient space and let qn be the quotient map. Let X := \\cup n \\in \\N X(n) (where each X(n) is identified with its image in X(n+1)). If there is no n such that X = X(n), then a subset A of X is defined to be open in X if and only if A \\cap X(n) is open in X(n) for all n. The space X is a CW complex, and the topology on X is the CW topology or weak topology. The subspace X(n) of X is the n-skeleton of X. The procedure of building X(n) from X(n-1) is called gluing on n-disks. For each n \\geq 1 and each \\alpha \\in Jn, let Φ\\alpha : D\\alpha n \\to X be the composition Φ\\alpha := iX(n)X \\circ qn \\circ iD\\alpha nZn (where iX(n)X: X(n) \\to X and iD\\alpha nZn: D\\alpha n \\to Zn are the inclusion maps). For n = 0, let J0 be a set in bijection with X(0), and for each \\alpha \\in J0, let D\\alpha 0 = B_\\alpha 0 :=\\{∗\\} be a singleton space and let Φ\\alpha : D\\alpha 0 \\to X be defined by Φ\\alpha (p) := v\\alpha, the vertex in X corresponding to \\alpha. For all n \\geq 0; and \\alpha \\in Jn, the map Φ\\alpha is the characteristic map, or gluing map, or attaching map associated to \\alpha. The image e\\alpha n := Φ\\alpha (B_\\alpha n) is the open n-cell of X corresponding to \\alpha. If there is an n \\in \\N such that there is an open n-cell but there are no open k-cells for any k > n, then X = X(n) is n-dimensional. If there is no such n, then X is infinite dimensional.      Let X be a CW complex, let n \\geq 1, and let \\alpha \\in Jn.   The map qn|X(n-1) is an embedding of X(n-1) into X(n).    As a set, X(n) is the disjoint union X(n-1) ∐ (∐\\alpha \\in Jn e\\alpha n).    Φ\\alpha |S\\alpha n-1X(n-1) = φ\\alpha.    The open n-cell e\\alpha n is an open set of X and Φ\\alpha |B_\\alpha ne\\alpha n: B_\\alpha n \\to e\\alpha n is a homeomorphism.        Examples     Let X be a CW complex and let A be a subset of X. The set A is open in X if and only if for all n \\geq 1 and all \\alpha \\in Jn, Φ\\alpha -1(A) is open in D\\alpha n.      Let X be a CW complex.   A subset B of X is closed in X if and only if B \\cap X(n) is closed in X(n) for all n.    If n \\geq 0 and \\beta \\in Jn, then \\text{Cl}_X(e\\beta n) has nonempty intersection with at most finitely many open cell of X.    A subset B of X is closed in X if and only if B \\cap \\text{Cl}_X(e\\beta n) is closed in \\text{Cl}_X(e\\beta n) for all open cells e\\beta n.        To prove properties of a CW complex X, a standard method is to use induction (on n).     A graph is a 1-dimensional CW complex.      For a CW complex X, the closed n-cell associated to an open n-cell e\\beta n is \\text{Cl}_X(e\\beta n). A vertex, or 0-cell, of X is an element of X(0). An edge of X is a closed 1-cell, and a face of X is a closed 2-cell.      Let X be a CW complex with associated index sets Jn for the n-cells and characterstic maps Φ\\alpha for each \\alpha \\in Jn and each n, and let Y be a topological space.  CW-CFBT = \"CW-Continuous Function Building Thm\"  Suppose that for all n \\geq 0 and \\alpha \\in Jn, g_\\alpha : Dn \\to Y is a continuous function. Suppose also that for all \\alpha \\in Jm and \\beta \\in Jn with \\alpha \\ne \\beta, whenever p \\in D\\alpha m, q \\in D\\beta n, and Φ\\alpha (p) = Φ\\beta (q), then g_\\alpha (p) = g\\beta (q). Then the collection\\{g_\\alpha \\} induces a unique continuous function g: X \\to Y with g \\circ Φ\\alpha = g_\\alpha for all n \\geq 0 and \\alpha \\in Jn.   CW-CFCT = \"CW-Continuous Function Checking Thm\"  If f:X \\to Y is a function, then f is continuous iff every composition f \\circ Φ\\alpha of f with an attaching map is continuous.       CW-HBT = \"CW-Homeomorphism Building Thm\"   Let X be a compact CW complex with associated index sets Jn for the n-cells and characterstic maps Φ\\alpha for each \\alpha \\in Jn and each n, and let Y be a T_2 topological space. Suppose that for all n \\geq 0 and \\alpha \\in Jn, g_\\alpha : Dn \\to Y is a continuous function such that g_\\alpha |Bn is injective. Suppose also that for all \\alpha \\in Jm and \\beta \\in Jn with \\alpha \\ne \\beta, (i) whenever p \\in D\\alpha m, q \\in D\\beta n, and Φ\\alpha (p) = Φ\\beta (q), then g_\\alpha (p) = g\\beta (q), and (ii) g_\\alpha (B_\\alpha m) \\cap g\\beta (B\\beta n) = \\es. If Y = \\cup n \\geq 0, \\alpha \\in Jn g_\\alpha (Bn), then the collection\\{g_\\alpha \\} induces a unique homeomorphism g: X \\to Y with g \\circ Φ\\alpha = g_\\alpha for all n \\geq 0 and \\alpha \\in Jn.    Interactions with homeomorphism invariants    CW complexes are T_2.      A CW complex X is compact if and only if X has only finitely many cells.      A CW complex X is PC if and only if the 1-skeleton X(1) is PC.      A space X locally deforms to each point if each point p of X is contained in an open subset Up of X such that there is a deformation retraction from the subspace Up onto\\{p\\}.      Every CW complex locally deforms to each point.      If X and Y are PC CW complexes, then X ∨ Y is a CW complex and \\pi_1(X ∨ Y) \\cong \\pi_1(X) ∗ \\pi_1(Y).      A topological space X is defined to be locally path-connected, or LPC, if for every point p \\in X and every open set U of X containing p, there is an open set V of X such that p \\in V \\sse U and (as a subspace of X) V is path-connected.      CW complexes are LPC.      A topological space X is simply-connected, or SC, if X is PC and \\pi_1(X) = 1.      A space X is semi-locally simply connected, or SLSC if for each point p of X there is an open set Up of X containing p such that the inclusion map Up \\to X induces the constant homomorphism \\pi_1(Up,p) \\to \\pi_1(X,p) to the identity element of \\pi_1(X,p).      CW complexes are SLSC.     Interactions with constructions:    Let X be a CW complex. A subcomplex of X is a closed subspace A in X satisfying the property that whenever e\\alpha is an open cell of X and e\\alpha \\cap A is nonempty, then \\text{Cl}_X(e\\alpha ) \\sse A.      If A is a subcomplex of a CW complex X, then A is a CW complex.      If X and Y are compact CW complexes, then X \\times Y is also a compact CW complex.      Fundamental groups of CW complexes    Let X be a 2-dimensional PC CW complex and let p \\in X be the basepoint. The inclusion map X(1) \\to X(2) induces a surjective homomorphism of fundamental groups whose kernel is generated by loops based at p in bijection with the 2-cells of X. More precisely: For each face f = e\\alpha 2 of X define θ\\alpha : I \\to X by θ\\alpha := iX(1)X \\circ φ\\alpha \\circ ω, where iX(1)X: X(1) \\to X is the inclusion map and ω:I \\to S\\alpha 1 is defined by ω(t) := (cos(2\\pi t),sin(2\\pi t)) for all t \\in I. Let γ\\alpha :I \\to X be a path from p to θ\\alpha (0), and let wf := γ\\alpha ∗ θ\\alpha ∗ γ\\alpha rev. Then \\pi_1(X,p) \\cong \\pi_1(X(1),p) \/ \\langle{[wf]\\}\\rangle^N.      For any PC CW complex X, \\pi_1(X) \\cong \\pi_1(X(2)).    Algorithm to present \\pi_1(CW)   Let X be a PC CW complex and let p \\in X(0) be the basepoint. Let ω:I \\to S\\alpha 1 be defined by ω(t) := (cos(2\\pi t),sin(2\\pi t)) and let ρ:I \\to D1 be defined by ρ(t) := 2t - 1 for all t \\in I. Suppose that for each face (2-cell) f = e\\alpha 2 of X, the map sf: I \\to X defined by sf := iX(1)X \\circ φ\\alpha \\circ ω satisfies sf(0) \\in X(0) and sf follows an edge path in X(1). Then a presentation for \\pi_1(X,p) can be computed as follows: Step 0: Choose a maximal tree T in the 1-skeleton X(1). For each vertex v of X, let tv: I \\to X be the (shortest) path in T from p to v. Step 1: For each edge e = e\\alpha e1 of X(1) outside of T, let ae be the loop in X at p defined by ae' := tΦ\\alpha e(-1) ∗ be ∗ tΦ\\alpha e(1)rev, where be := Φ\\alpha e \\circ ρ is the path in X from Φ\\alpha e(-1) to Φ\\alpha e(1) that traverses the edge e. Let ae := [ae']. Then \\pi_1(X(1),p) = F({ae | e is an edge of X outside of T\\}). Step 2: For each face f = e\\alpha f2 of X(2), let rf'' := tsf(0) ∗ sf ∗ tsf(1)rev. By inserting and\/or deleting path products with paths of the form e ∗ erev and erev ∗ e for edges e in T into rf'', create a path rf' that is a path product of paths of the form ae' or (ae')rev for edges e outside of T; that is, [rf'] =\\pi_1(X(1),p) rf for some word rf = ae1j1 ··· aemjm with m \\geq 0 and each ji \\in\\{± 1\\}. Then \\pi_1(X,p) = \\pi_1(X(2),p) = \\langle\\{ae | e is an edge of X outside of T\\} |\\{rf = 1 | f is a face of X\\} \\rangle.      The presentation complex associated to a presentation \\langle A | R \\rangle of a group G is a CW complex with one vertex v, an edge ea for each a \\in A (with attaching maps gluing both endpoints of ea to v), and a face fr for each r \\in R with attaching map determined by following the edges according to the word r.    \"2-Way Street Thm\"   For every group G, there is a 2-dimensional PC CW complex X with \\pi_1(X) \\cong G. Moreover, if \\langle A | R \\rangle is a presentation of G and Y is the associated presentation complex, then \\pi_1(Y) \\cong G.     "
},
{
  "id": "def-5.170",
  "level": "2",
  "url": "sec-presenting-spaces.html#def-5.170",
  "type": "Definition",
  "number": "5.6.1",
  "title": "",
  "body": "  Let X(0) be a set of points with the discrete topology. For each n \\geq 1, form the space X(n) from X(n-1) by: For each \\alpha in an index set Jn, let D\\alpha n be a copy of the closed unit disk Dn in \\R^n (with Euclidean topology), and let φ\\alpha : S\\alpha n-1 \\to X(n-1) be a continuous function. Let Zn := X(n-1) ∐ (∐\\alpha \\in Jn D\\alpha n) have the disjoint union topology, and let \\sim be the minimal equivalence relation on this space such that d \\sim φ\\alpha (d) for all d \\in S\\alpha n-1 and \\alpha \\in Jn. Define X(n) be the quotient space and let qn be the quotient map. Let X := \\cup n \\in \\N X(n) (where each X(n) is identified with its image in X(n+1)). If there is no n such that X = X(n), then a subset A of X is defined to be open in X if and only if A \\cap X(n) is open in X(n) for all n. The space X is a CW complex, and the topology on X is the CW topology or weak topology. The subspace X(n) of X is the n-skeleton of X. The procedure of building X(n) from X(n-1) is called gluing on n-disks. For each n \\geq 1 and each \\alpha \\in Jn, let Φ\\alpha : D\\alpha n \\to X be the composition Φ\\alpha := iX(n)X \\circ qn \\circ iD\\alpha nZn (where iX(n)X: X(n) \\to X and iD\\alpha nZn: D\\alpha n \\to Zn are the inclusion maps). For n = 0, let J0 be a set in bijection with X(0), and for each \\alpha \\in J0, let D\\alpha 0 = B_\\alpha 0 :=\\{∗\\} be a singleton space and let Φ\\alpha : D\\alpha 0 \\to X be defined by Φ\\alpha (p) := v\\alpha, the vertex in X corresponding to \\alpha. For all n \\geq 0; and \\alpha \\in Jn, the map Φ\\alpha is the characteristic map, or gluing map, or attaching map associated to \\alpha. The image e\\alpha n := Φ\\alpha (B_\\alpha n) is the open n-cell of X corresponding to \\alpha. If there is an n \\in \\N such that there is an open n-cell but there are no open k-cells for any k > n, then X = X(n) is n-dimensional. If there is no such n, then X is infinite dimensional.   "
},
{
  "id": "prop-5.172",
  "level": "2",
  "url": "sec-presenting-spaces.html#prop-5.172",
  "type": "Proposition",
  "number": "5.6.2",
  "title": "",
  "body": "  Let X be a CW complex, let n \\geq 1, and let \\alpha \\in Jn.   The map qn|X(n-1) is an embedding of X(n-1) into X(n).    As a set, X(n) is the disjoint union X(n-1) ∐ (∐\\alpha \\in Jn e\\alpha n).    Φ\\alpha |S\\alpha n-1X(n-1) = φ\\alpha.    The open n-cell e\\alpha n is an open set of X and Φ\\alpha |B_\\alpha ne\\alpha n: B_\\alpha n \\to e\\alpha n is a homeomorphism.      "
},
{
  "id": "example-45",
  "level": "2",
  "url": "sec-presenting-spaces.html#example-45",
  "type": "Example",
  "number": "5.6.3",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-5.173",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.173",
  "type": "Theorem",
  "number": "5.6.4",
  "title": "",
  "body": "  Let X be a CW complex and let A be a subset of X. The set A is open in X if and only if for all n \\geq 1 and all \\alpha \\in Jn, Φ\\alpha -1(A) is open in D\\alpha n.   "
},
{
  "id": "prop-5.174",
  "level": "2",
  "url": "sec-presenting-spaces.html#prop-5.174",
  "type": "Proposition",
  "number": "5.6.5",
  "title": "",
  "body": "  Let X be a CW complex.   A subset B of X is closed in X if and only if B \\cap X(n) is closed in X(n) for all n.    If n \\geq 0 and \\beta \\in Jn, then \\text{Cl}_X(e\\beta n) has nonempty intersection with at most finitely many open cell of X.    A subset B of X is closed in X if and only if B \\cap \\text{Cl}_X(e\\beta n) is closed in \\text{Cl}_X(e\\beta n) for all open cells e\\beta n.      "
},
{
  "id": "remark-25",
  "level": "2",
  "url": "sec-presenting-spaces.html#remark-25",
  "type": "Remark",
  "number": "5.6.6",
  "title": "",
  "body": " To prove properties of a CW complex X, a standard method is to use induction (on n).  "
},
{
  "id": "lem-5.175",
  "level": "2",
  "url": "sec-presenting-spaces.html#lem-5.175",
  "type": "Lemma",
  "number": "5.6.7",
  "title": "",
  "body": "  A graph is a 1-dimensional CW complex.   "
},
{
  "id": "def-5.177",
  "level": "2",
  "url": "sec-presenting-spaces.html#def-5.177",
  "type": "Definition",
  "number": "5.6.8",
  "title": "",
  "body": "  For a CW complex X, the closed n-cell associated to an open n-cell e\\beta n is \\text{Cl}_X(e\\beta n). A vertex, or 0-cell, of X is an element of X(0). An edge of X is a closed 1-cell, and a face of X is a closed 2-cell.   "
},
{
  "id": "thm-5.185",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.185",
  "type": "Theorem",
  "number": "5.6.9",
  "title": "",
  "body": "  Let X be a CW complex with associated index sets Jn for the n-cells and characterstic maps Φ\\alpha for each \\alpha \\in Jn and each n, and let Y be a topological space.  CW-CFBT = \"CW-Continuous Function Building Thm\"  Suppose that for all n \\geq 0 and \\alpha \\in Jn, g_\\alpha : Dn \\to Y is a continuous function. Suppose also that for all \\alpha \\in Jm and \\beta \\in Jn with \\alpha \\ne \\beta, whenever p \\in D\\alpha m, q \\in D\\beta n, and Φ\\alpha (p) = Φ\\beta (q), then g_\\alpha (p) = g\\beta (q). Then the collection\\{g_\\alpha \\} induces a unique continuous function g: X \\to Y with g \\circ Φ\\alpha = g_\\alpha for all n \\geq 0 and \\alpha \\in Jn.   CW-CFCT = \"CW-Continuous Function Checking Thm\"  If f:X \\to Y is a function, then f is continuous iff every composition f \\circ Φ\\alpha of f with an attaching map is continuous.      "
},
{
  "id": "thm-5.190",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.190",
  "type": "Theorem",
  "number": "5.6.10",
  "title": "CW-HBT = \"CW-Homeomorphism Building Thm\".",
  "body": "CW-HBT = \"CW-Homeomorphism Building Thm\"   Let X be a compact CW complex with associated index sets Jn for the n-cells and characterstic maps Φ\\alpha for each \\alpha \\in Jn and each n, and let Y be a T_2 topological space. Suppose that for all n \\geq 0 and \\alpha \\in Jn, g_\\alpha : Dn \\to Y is a continuous function such that g_\\alpha |Bn is injective. Suppose also that for all \\alpha \\in Jm and \\beta \\in Jn with \\alpha \\ne \\beta, (i) whenever p \\in D\\alpha m, q \\in D\\beta n, and Φ\\alpha (p) = Φ\\beta (q), then g_\\alpha (p) = g\\beta (q), and (ii) g_\\alpha (B_\\alpha m) \\cap g\\beta (B\\beta n) = \\es. If Y = \\cup n \\geq 0, \\alpha \\in Jn g_\\alpha (Bn), then the collection\\{g_\\alpha \\} induces a unique homeomorphism g: X \\to Y with g \\circ Φ\\alpha = g_\\alpha for all n \\geq 0 and \\alpha \\in Jn.   "
},
{
  "id": "thm-5.200",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.200",
  "type": "Theorem",
  "number": "5.6.11",
  "title": "",
  "body": "  CW complexes are T_2.   "
},
{
  "id": "thm-5.202",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.202",
  "type": "Theorem",
  "number": "5.6.12",
  "title": "",
  "body": "  A CW complex X is compact if and only if X has only finitely many cells.   "
},
{
  "id": "thm-5.205",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.205",
  "type": "Theorem",
  "number": "5.6.13",
  "title": "",
  "body": "  A CW complex X is PC if and only if the 1-skeleton X(1) is PC.   "
},
{
  "id": "def-5.207",
  "level": "2",
  "url": "sec-presenting-spaces.html#def-5.207",
  "type": "Definition",
  "number": "5.6.14",
  "title": "",
  "body": "  A space X locally deforms to each point if each point p of X is contained in an open subset Up of X such that there is a deformation retraction from the subspace Up onto\\{p\\}.   "
},
{
  "id": "thm-5.208",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.208",
  "type": "Theorem",
  "number": "5.6.15",
  "title": "",
  "body": "  Every CW complex locally deforms to each point.   "
},
{
  "id": "cor-5.209",
  "level": "2",
  "url": "sec-presenting-spaces.html#cor-5.209",
  "type": "Corollary",
  "number": "5.6.16",
  "title": "",
  "body": "  If X and Y are PC CW complexes, then X ∨ Y is a CW complex and \\pi_1(X ∨ Y) \\cong \\pi_1(X) ∗ \\pi_1(Y).   "
},
{
  "id": "def-5.212",
  "level": "2",
  "url": "sec-presenting-spaces.html#def-5.212",
  "type": "Definition",
  "number": "5.6.17",
  "title": "",
  "body": "  A topological space X is defined to be locally path-connected, or LPC, if for every point p \\in X and every open set U of X containing p, there is an open set V of X such that p \\in V \\sse U and (as a subspace of X) V is path-connected.   "
},
{
  "id": "cor-5.213",
  "level": "2",
  "url": "sec-presenting-spaces.html#cor-5.213",
  "type": "Corollary",
  "number": "5.6.18",
  "title": "",
  "body": "  CW complexes are LPC.   "
},
{
  "id": "def-5.215",
  "level": "2",
  "url": "sec-presenting-spaces.html#def-5.215",
  "type": "Definition",
  "number": "5.6.19",
  "title": "",
  "body": "  A topological space X is simply-connected, or SC, if X is PC and \\pi_1(X) = 1.   "
},
{
  "id": "def-5.216",
  "level": "2",
  "url": "sec-presenting-spaces.html#def-5.216",
  "type": "Definition",
  "number": "5.6.20",
  "title": "",
  "body": "  A space X is semi-locally simply connected, or SLSC if for each point p of X there is an open set Up of X containing p such that the inclusion map Up \\to X induces the constant homomorphism \\pi_1(Up,p) \\to \\pi_1(X,p) to the identity element of \\pi_1(X,p).   "
},
{
  "id": "cor-5.217",
  "level": "2",
  "url": "sec-presenting-spaces.html#cor-5.217",
  "type": "Corollary",
  "number": "5.6.21",
  "title": "",
  "body": "  CW complexes are SLSC.   "
},
{
  "id": "def-5.220",
  "level": "2",
  "url": "sec-presenting-spaces.html#def-5.220",
  "type": "Definition",
  "number": "5.6.22",
  "title": "",
  "body": "  Let X be a CW complex. A subcomplex of X is a closed subspace A in X satisfying the property that whenever e\\alpha is an open cell of X and e\\alpha \\cap A is nonempty, then \\text{Cl}_X(e\\alpha ) \\sse A.   "
},
{
  "id": "thm-5.222",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.222",
  "type": "Theorem",
  "number": "5.6.23",
  "title": "",
  "body": "  If A is a subcomplex of a CW complex X, then A is a CW complex.   "
},
{
  "id": "thm-5.224",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.224",
  "type": "Theorem",
  "number": "5.6.24",
  "title": "",
  "body": "  If X and Y are compact CW complexes, then X \\times Y is also a compact CW complex.   "
},
{
  "id": "thm-5.230",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.230",
  "type": "Theorem",
  "number": "5.6.25",
  "title": "",
  "body": "  Let X be a 2-dimensional PC CW complex and let p \\in X be the basepoint. The inclusion map X(1) \\to X(2) induces a surjective homomorphism of fundamental groups whose kernel is generated by loops based at p in bijection with the 2-cells of X. More precisely: For each face f = e\\alpha 2 of X define θ\\alpha : I \\to X by θ\\alpha := iX(1)X \\circ φ\\alpha \\circ ω, where iX(1)X: X(1) \\to X is the inclusion map and ω:I \\to S\\alpha 1 is defined by ω(t) := (cos(2\\pi t),sin(2\\pi t)) for all t \\in I. Let γ\\alpha :I \\to X be a path from p to θ\\alpha (0), and let wf := γ\\alpha ∗ θ\\alpha ∗ γ\\alpha rev. Then \\pi_1(X,p) \\cong \\pi_1(X(1),p) \/ \\langle{[wf]\\}\\rangle^N.   "
},
{
  "id": "thm-5.231",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.231",
  "type": "Theorem",
  "number": "5.6.26",
  "title": "",
  "body": "  For any PC CW complex X, \\pi_1(X) \\cong \\pi_1(X(2)).   "
},
{
  "id": "thm-5.233",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.233",
  "type": "Theorem",
  "number": "5.6.27",
  "title": "Algorithm to present \\pi_1(CW).",
  "body": "Algorithm to present \\pi_1(CW)   Let X be a PC CW complex and let p \\in X(0) be the basepoint. Let ω:I \\to S\\alpha 1 be defined by ω(t) := (cos(2\\pi t),sin(2\\pi t)) and let ρ:I \\to D1 be defined by ρ(t) := 2t - 1 for all t \\in I. Suppose that for each face (2-cell) f = e\\alpha 2 of X, the map sf: I \\to X defined by sf := iX(1)X \\circ φ\\alpha \\circ ω satisfies sf(0) \\in X(0) and sf follows an edge path in X(1). Then a presentation for \\pi_1(X,p) can be computed as follows: Step 0: Choose a maximal tree T in the 1-skeleton X(1). For each vertex v of X, let tv: I \\to X be the (shortest) path in T from p to v. Step 1: For each edge e = e\\alpha e1 of X(1) outside of T, let ae be the loop in X at p defined by ae' := tΦ\\alpha e(-1) ∗ be ∗ tΦ\\alpha e(1)rev, where be := Φ\\alpha e \\circ ρ is the path in X from Φ\\alpha e(-1) to Φ\\alpha e(1) that traverses the edge e. Let ae := [ae']. Then \\pi_1(X(1),p) = F({ae | e is an edge of X outside of T\\}). Step 2: For each face f = e\\alpha f2 of X(2), let rf'' := tsf(0) ∗ sf ∗ tsf(1)rev. By inserting and\/or deleting path products with paths of the form e ∗ erev and erev ∗ e for edges e in T into rf'', create a path rf' that is a path product of paths of the form ae' or (ae')rev for edges e outside of T; that is, [rf'] =\\pi_1(X(1),p) rf for some word rf = ae1j1 ··· aemjm with m \\geq 0 and each ji \\in\\{± 1\\}. Then \\pi_1(X,p) = \\pi_1(X(2),p) = \\langle\\{ae | e is an edge of X outside of T\\} |\\{rf = 1 | f is a face of X\\} \\rangle.   "
},
{
  "id": "def-5.235",
  "level": "2",
  "url": "sec-presenting-spaces.html#def-5.235",
  "type": "Definition",
  "number": "5.6.28",
  "title": "",
  "body": "  The presentation complex associated to a presentation \\langle A | R \\rangle of a group G is a CW complex with one vertex v, an edge ea for each a \\in A (with attaching maps gluing both endpoints of ea to v), and a face fr for each r \\in R with attaching map determined by following the edges according to the word r.   "
},
{
  "id": "thm-5.236",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.236",
  "type": "Theorem",
  "number": "5.6.29",
  "title": "\"2-Way Street Thm\".",
  "body": "\"2-Way Street Thm\"   For every group G, there is a 2-dimensional PC CW complex X with \\pi_1(X) \\cong G. Moreover, if \\langle A | R \\rangle is a presentation of G and Y is the associated presentation complex, then \\pi_1(Y) \\cong G.   "
},
{
  "id": "sec-liting",
  "level": "1",
  "url": "sec-liting.html",
  "type": "Section",
  "number": "6.1",
  "title": "Definitions and Lifting",
  "body": "Definitions and Lifting  Definition    A covering space of a topological space is a space together with a continuous function satisfying: There is an open covering of such that for all the preimage is a disjoint union of open sets in , each of which is mapped (by the restriction of ) homeomorphically onto . Each set is called evenly covered.     Examples    Lifting Theorems  PPHLT = Path and Path Homotopy Lifting Theorems   Let be a covering space.  PLT  Given a path , there is a unique path such that .   PHLT  Given a path homotopy , there is a unique path homotopy such that . Moreover, if is a path homotopy between two paths , then is a path homotopy between the \"lifts\" of from the PLT.       LC+ULP = Lifting Criterion and Unique Lifting Property   Let be a covering space, let be a PC and LPC space, and let be continuous.   If , then there is a unique continuous function such that .    If , then there does not exist a continuous lift such that .         If is a covering space, then the induced homomorphism is injective (that is, ), and the image satisfies . Consequently, is isomorphic to a subgroup of .     Application to group theory       For all , the free group is a subgroup of .    The free group on a countably infinite set is a subgroup of .        The number of sheets    Let be a covering space such that and are PC. The number of sheets of the covering space is .    Lifting Correspondence   Let be a covering space such that and are PC. Then:   The Lifting Correspondence Function defined by , where is the unique lift of the loop to a path in starting at , is a well-defined bijection.    For all points (the number of sheets of ) the index of .        Examples    Interactions with functions and constructions:    If is a covering space, then is an open map.      Let be a covering space. If is a subspace of and , then the restriction is also a covering space.      Let be covering spaces for . Then is also a covering space.     Interactions with homeomorphism invariants:    Let be a covering space. If is a CW complex, then is a CW complex. Moreover, maps open -cells to open -cells for all .      Let be a covering space satisfying the property that is finite and nonempty for all . The space is compact and if and only if the space is compact and .     "
},
{
  "id": "def-6.1",
  "level": "2",
  "url": "sec-liting.html#def-6.1",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": "  A covering space of a topological space is a space together with a continuous function satisfying: There is an open covering of such that for all the preimage is a disjoint union of open sets in , each of which is mapped (by the restriction of ) homeomorphically onto . Each set is called evenly covered.   "
},
{
  "id": "example-46",
  "level": "2",
  "url": "sec-liting.html#example-46",
  "type": "Example",
  "number": "6.1.2",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-6.3",
  "level": "2",
  "url": "sec-liting.html#thm-6.3",
  "type": "Theorem",
  "number": "6.1.3",
  "title": "PPHLT = Path and Path Homotopy Lifting Theorems.",
  "body": "PPHLT = Path and Path Homotopy Lifting Theorems   Let be a covering space.  PLT  Given a path , there is a unique path such that .   PHLT  Given a path homotopy , there is a unique path homotopy such that . Moreover, if is a path homotopy between two paths , then is a path homotopy between the \"lifts\" of from the PLT.      "
},
{
  "id": "thm-6.4",
  "level": "2",
  "url": "sec-liting.html#thm-6.4",
  "type": "Theorem",
  "number": "6.1.4",
  "title": "LC+ULP = Lifting Criterion and Unique Lifting Property.",
  "body": "LC+ULP = Lifting Criterion and Unique Lifting Property   Let be a covering space, let be a PC and LPC space, and let be continuous.   If , then there is a unique continuous function such that .    If , then there does not exist a continuous lift such that .      "
},
{
  "id": "thm-6.6",
  "level": "2",
  "url": "sec-liting.html#thm-6.6",
  "type": "Theorem",
  "number": "6.1.5",
  "title": "",
  "body": "  If is a covering space, then the induced homomorphism is injective (that is, ), and the image satisfies . Consequently, is isomorphic to a subgroup of .   "
},
{
  "id": "cor-6.7",
  "level": "2",
  "url": "sec-liting.html#cor-6.7",
  "type": "Corollary",
  "number": "6.1.6",
  "title": "",
  "body": "     For all , the free group is a subgroup of .    The free group on a countably infinite set is a subgroup of .      "
},
{
  "id": "def-6.10",
  "level": "2",
  "url": "sec-liting.html#def-6.10",
  "type": "Definition",
  "number": "6.1.7",
  "title": "",
  "body": "  Let be a covering space such that and are PC. The number of sheets of the covering space is .   "
},
{
  "id": "thm-6.11",
  "level": "2",
  "url": "sec-liting.html#thm-6.11",
  "type": "Theorem",
  "number": "6.1.8",
  "title": "Lifting Correspondence.",
  "body": "Lifting Correspondence   Let be a covering space such that and are PC. Then:   The Lifting Correspondence Function defined by , where is the unique lift of the loop to a path in starting at , is a well-defined bijection.    For all points (the number of sheets of ) the index of .      "
},
{
  "id": "example-47",
  "level": "2",
  "url": "sec-liting.html#example-47",
  "type": "Example",
  "number": "6.1.9",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-6.18",
  "level": "2",
  "url": "sec-liting.html#thm-6.18",
  "type": "Theorem",
  "number": "6.1.10",
  "title": "",
  "body": "  If is a covering space, then is an open map.   "
},
{
  "id": "thm-6.20",
  "level": "2",
  "url": "sec-liting.html#thm-6.20",
  "type": "Theorem",
  "number": "6.1.11",
  "title": "",
  "body": "  Let be a covering space. If is a subspace of and , then the restriction is also a covering space.   "
},
{
  "id": "thm-6.21",
  "level": "2",
  "url": "sec-liting.html#thm-6.21",
  "type": "Theorem",
  "number": "6.1.12",
  "title": "",
  "body": "  Let be covering spaces for . Then is also a covering space.   "
},
{
  "id": "cor-6.25",
  "level": "2",
  "url": "sec-liting.html#cor-6.25",
  "type": "Corollary",
  "number": "6.1.13",
  "title": "",
  "body": "  Let be a covering space. If is a CW complex, then is a CW complex. Moreover, maps open -cells to open -cells for all .   "
},
{
  "id": "thm-6.27",
  "level": "2",
  "url": "sec-liting.html#thm-6.27",
  "type": "Theorem",
  "number": "6.1.14",
  "title": "",
  "body": "  Let be a covering space satisfying the property that is finite and nonempty for all . The space is compact and if and only if the space is compact and .   "
},
{
  "id": "sec-actions",
  "level": "1",
  "url": "sec-actions.html",
  "type": "Section",
  "number": "6.2",
  "title": "Building Covering Spaces Using Group Actions",
  "body": "Building Covering Spaces Using Group Actions  Covering space group actions    Given a group G and a topological space Y, an action of G on Y (or \"action of G on Y by homeomorphisms\") is a homomorphism ρ:G \\to Homeo(Y), where Homeo(Y) is the group of homeomorphisms :Y \\to Y with group operation given by composition. For each g \\in G and y \\in Y, denote g · y := (ρ(g))(y).      Given an action of a group G on a space Y, let \\sim G be the equivalence relation on Y defined by [y \\sim G y' iff there is a g \\in G with g · y = y'] for all y,y' \\in Y. For each y \\in Y, the equivalence class [y] = [y]G = G · y is called the orbit of y. The quotient space Y\/\\sim is called the orbit space of the group action and denoted Y\/G.      A covering space action of a group G on a space Y is an action satisfying: For each y \\in Y there is an open set Uy in Y containing y such that whenever g,g' \\in G and (g · Uy) \\cap (g' · Uy) \\ne \\es then g = g'.      If G has a covering space action on Y, then:   The quotient p:Y \\to Y\/G is a covering space.    If Y is PC and LPC and y_0 \\in Y, then p∗(\\pi_1(Y,y_0)) ⊴ \\pi_1(Y\/G,[y_0]) and G \\cong \\pi_1(Y\/G,[y_0]) \/ p∗(\\pi_1(Y,y_0)).         If Y is an SC CW complex and G acts on Y with a covering space action, then \\pi_1(Y\/G) \\cong G.     Building SC covering spaces from group presentations    Let \\langle A | R \\rangle be a presentation of a group G. The Cayley complex of this presentation is the CW complex X̃ constructed by: X̃(0) = G. The set of edges is in bijection with G \\times A; for each g \\in G and a \\in A, the attaching map of the edge eg,a is φg,a(-1) = g and φg,a(1) = ga. The set of faces is in bijection with G \\times R; for each g \\in G and r \\in R, the attaching map φg,r of the face fg,r satisfies φg,r \\circ ω := edge path in X̃(1) starting at g labeled by r. The 1-skeleton X̃(1) is the Cayley graph of G with respect to A.      Let \\langle A | R \\rangle be a presentation of a group G, let X̃ be the Cayley complex, and let X be the presentation complex. Then   the action of G on X̃, given by g · h := (gh), g · eh,a := e(gh),a, and g · fh,r := f(gh),r for all h \\in G, a\\in A, and r \\in R, is a covering space action;    X̃ is a SC CW complex (and hence PC, LPC, and SLSC), and hence \\pi_1(X̃\/G) \\cong G; and    X̃\/G \\cong X.        Examples    Existence of covering spaces    Let X be a PC, LPC, SLSC space and x_0 \\in X. Then:   (SC Covering Space Thm): There is a SC covering space p:(X̃,x̃_0) \\to (X,x_0), and there is covering space group action of G := \\pi_1(X,x_0) on X̃ that induces p; hence (X̃\/G,[x̃_0]) \\cong (X,x_0). Moreover, if X is a CW complex, then X̃ is a CW complex, and for each open n-cell \\sigma of X there are |G| open n-cells of X̃ mapping via p to \\sigma such that the action of each g \\in G on X̃ permutes these n-cells.    (Covering Space Existence Thm): For each subgroup H < \\pi_1(X,x_0), there is a covering space rH: (X̃\/H,[x̃_0]H) \\to (X,x_0) such that rH \\circ qH = p, where qH: X̃ \\to X̃\/H is the quotient map, and H = rH∗(\\pi_1(X̃\/H,[x̃_0]H)).        Examples     If (X,x_0) is a PC, LPC, SLSC space or PC CW complex, H < \\pi_1(X,x_0), and rH:(X̃\/H,[x̃_0]H) \\to (X,x_0) is the covering space of Thm 6.60(b), then the number of sheets of this covering space is the index of H in \\pi_1(X,x_0).     Building covering spaces for subgroups from group presentations    Let \\langle A | R \\rangle be a presentation of a group G and let X be the presentation complex with vertex x_0. Let H < G.   (Top-down Method): Let X̃ be the Cayley complex of the presentation with quotient map p:X̃ \\to X. Then H has a covering space action on X̃, with quotient map qH:X̃ \\to X̃\/H, and the covering space rH:X̃\/H \\to X defined by rH([s]H) := p(s) for all [s]H \\in X̃\/H satisfies Im rH∗ = H.    (Bottom-up Method): Let Z be the CW complex constructed by: Z(0) := H\\G (the set of right cosets of H in G). The set of edges of Z is in bijection with H\\G \\times A; for each Hg \\in H\\G and a \\in A, the attaching map of the edge eHg,a is φHg,a(-1) = Hg and φHg,a(1) = Hga. The set of faces of Z is in bijection with H\\G \\times R; for each Hg \\in H\\G and r \\in R, the attaching map φHg,r of the face fHg,r satisfies φHg,r \\circ ω := edge path in Z(1) starting at Hg labeled by r. Then r:Z \\to X such that r(Hg) = x_0, r(eHg,a) = the edge of X corresponding to a, and r(fHg,r) = the face of X corresponding to r (for all Hg, a, and r) is a covering space and Im r∗ = H.        Applications to group theory    Every subgroup of a free group is a free group.      Let H be a finite index subgroup of a group G.   If G is a finitely generated group, then H is also finitely generated.    If G is a finitely presented group, then H is also finitely presented.        "
},
{
  "id": "def-6.40",
  "level": "2",
  "url": "sec-actions.html#def-6.40",
  "type": "Definition",
  "number": "6.2.1",
  "title": "",
  "body": "  Given a group G and a topological space Y, an action of G on Y (or \"action of G on Y by homeomorphisms\") is a homomorphism ρ:G \\to Homeo(Y), where Homeo(Y) is the group of homeomorphisms :Y \\to Y with group operation given by composition. For each g \\in G and y \\in Y, denote g · y := (ρ(g))(y).   "
},
{
  "id": "def-6.42",
  "level": "2",
  "url": "sec-actions.html#def-6.42",
  "type": "Definition",
  "number": "6.2.2",
  "title": "",
  "body": "  Given an action of a group G on a space Y, let \\sim G be the equivalence relation on Y defined by [y \\sim G y' iff there is a g \\in G with g · y = y'] for all y,y' \\in Y. For each y \\in Y, the equivalence class [y] = [y]G = G · y is called the orbit of y. The quotient space Y\/\\sim is called the orbit space of the group action and denoted Y\/G.   "
},
{
  "id": "def-6.44",
  "level": "2",
  "url": "sec-actions.html#def-6.44",
  "type": "Definition",
  "number": "6.2.3",
  "title": "",
  "body": "  A covering space action of a group G on a space Y is an action satisfying: For each y \\in Y there is an open set Uy in Y containing y such that whenever g,g' \\in G and (g · Uy) \\cap (g' · Uy) \\ne \\es then g = g'.   "
},
{
  "id": "thm-6.45",
  "level": "2",
  "url": "sec-actions.html#thm-6.45",
  "type": "Theorem",
  "number": "6.2.4",
  "title": "",
  "body": "  If G has a covering space action on Y, then:   The quotient p:Y \\to Y\/G is a covering space.    If Y is PC and LPC and y_0 \\in Y, then p∗(\\pi_1(Y,y_0)) ⊴ \\pi_1(Y\/G,[y_0]) and G \\cong \\pi_1(Y\/G,[y_0]) \/ p∗(\\pi_1(Y,y_0)).      "
},
{
  "id": "cor-6.46",
  "level": "2",
  "url": "sec-actions.html#cor-6.46",
  "type": "Corollary",
  "number": "6.2.5",
  "title": "",
  "body": "  If Y is an SC CW complex and G acts on Y with a covering space action, then \\pi_1(Y\/G) \\cong G.   "
},
{
  "id": "def-6.50",
  "level": "2",
  "url": "sec-actions.html#def-6.50",
  "type": "Definition",
  "number": "6.2.6",
  "title": "",
  "body": "  Let \\langle A | R \\rangle be a presentation of a group G. The Cayley complex of this presentation is the CW complex X̃ constructed by: X̃(0) = G. The set of edges is in bijection with G \\times A; for each g \\in G and a \\in A, the attaching map of the edge eg,a is φg,a(-1) = g and φg,a(1) = ga. The set of faces is in bijection with G \\times R; for each g \\in G and r \\in R, the attaching map φg,r of the face fg,r satisfies φg,r \\circ ω := edge path in X̃(1) starting at g labeled by r. The 1-skeleton X̃(1) is the Cayley graph of G with respect to A.   "
},
{
  "id": "thm-6.52",
  "level": "2",
  "url": "sec-actions.html#thm-6.52",
  "type": "Theorem",
  "number": "6.2.7",
  "title": "",
  "body": "  Let \\langle A | R \\rangle be a presentation of a group G, let X̃ be the Cayley complex, and let X be the presentation complex. Then   the action of G on X̃, given by g · h := (gh), g · eh,a := e(gh),a, and g · fh,r := f(gh),r for all h \\in G, a\\in A, and r \\in R, is a covering space action;    X̃ is a SC CW complex (and hence PC, LPC, and SLSC), and hence \\pi_1(X̃\/G) \\cong G; and    X̃\/G \\cong X.      "
},
{
  "id": "example-48",
  "level": "2",
  "url": "sec-actions.html#example-48",
  "type": "Example",
  "number": "6.2.8",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-6.60",
  "level": "2",
  "url": "sec-actions.html#thm-6.60",
  "type": "Theorem",
  "number": "6.2.9",
  "title": "",
  "body": "  Let X be a PC, LPC, SLSC space and x_0 \\in X. Then:   (SC Covering Space Thm): There is a SC covering space p:(X̃,x̃_0) \\to (X,x_0), and there is covering space group action of G := \\pi_1(X,x_0) on X̃ that induces p; hence (X̃\/G,[x̃_0]) \\cong (X,x_0). Moreover, if X is a CW complex, then X̃ is a CW complex, and for each open n-cell \\sigma of X there are |G| open n-cells of X̃ mapping via p to \\sigma such that the action of each g \\in G on X̃ permutes these n-cells.    (Covering Space Existence Thm): For each subgroup H < \\pi_1(X,x_0), there is a covering space rH: (X̃\/H,[x̃_0]H) \\to (X,x_0) such that rH \\circ qH = p, where qH: X̃ \\to X̃\/H is the quotient map, and H = rH∗(\\pi_1(X̃\/H,[x̃_0]H)).      "
},
{
  "id": "example-49",
  "level": "2",
  "url": "sec-actions.html#example-49",
  "type": "Example",
  "number": "6.2.10",
  "title": "",
  "body": " Examples  "
},
{
  "id": "cor-6.67",
  "level": "2",
  "url": "sec-actions.html#cor-6.67",
  "type": "Corollary",
  "number": "6.2.11",
  "title": "",
  "body": "  If (X,x_0) is a PC, LPC, SLSC space or PC CW complex, H < \\pi_1(X,x_0), and rH:(X̃\/H,[x̃_0]H) \\to (X,x_0) is the covering space of Thm 6.60(b), then the number of sheets of this covering space is the index of H in \\pi_1(X,x_0).   "
},
{
  "id": "thm-6.70",
  "level": "2",
  "url": "sec-actions.html#thm-6.70",
  "type": "Theorem",
  "number": "6.2.12",
  "title": "",
  "body": "  Let \\langle A | R \\rangle be a presentation of a group G and let X be the presentation complex with vertex x_0. Let H < G.   (Top-down Method): Let X̃ be the Cayley complex of the presentation with quotient map p:X̃ \\to X. Then H has a covering space action on X̃, with quotient map qH:X̃ \\to X̃\/H, and the covering space rH:X̃\/H \\to X defined by rH([s]H) := p(s) for all [s]H \\in X̃\/H satisfies Im rH∗ = H.    (Bottom-up Method): Let Z be the CW complex constructed by: Z(0) := H\\G (the set of right cosets of H in G). The set of edges of Z is in bijection with H\\G \\times A; for each Hg \\in H\\G and a \\in A, the attaching map of the edge eHg,a is φHg,a(-1) = Hg and φHg,a(1) = Hga. The set of faces of Z is in bijection with H\\G \\times R; for each Hg \\in H\\G and r \\in R, the attaching map φHg,r of the face fHg,r satisfies φHg,r \\circ ω := edge path in Z(1) starting at Hg labeled by r. Then r:Z \\to X such that r(Hg) = x_0, r(eHg,a) = the edge of X corresponding to a, and r(fHg,r) = the face of X corresponding to r (for all Hg, a, and r) is a covering space and Im r∗ = H.      "
},
{
  "id": "thm-6.75",
  "level": "2",
  "url": "sec-actions.html#thm-6.75",
  "type": "Theorem",
  "number": "6.2.13",
  "title": "",
  "body": "  Every subgroup of a free group is a free group.   "
},
{
  "id": "thm-6.77",
  "level": "2",
  "url": "sec-actions.html#thm-6.77",
  "type": "Theorem",
  "number": "6.2.14",
  "title": "",
  "body": "  Let H be a finite index subgroup of a group G.   If G is a finitely generated group, then H is also finitely generated.    If G is a finitely presented group, then H is also finitely presented.      "
},
{
  "id": "sec-galois-cor",
  "level": "1",
  "url": "sec-galois-cor.html",
  "type": "Section",
  "number": "6.3",
  "title": "The Universal Covering and Galois Correspondence",
  "body": "The Universal Covering and Galois Correspondence    An isomorphism of pointed covering spaces pi: (Yi,yi) \\to (X,x_0) for i=1,2 is a homeomorphism f:(Y1,y1) \\to (Y2,y2) such that p2 \\circ f = p1.    Covering Space Uniqueness Theorem   Any two PC, LPC pointed covering spaces pi: (Yi,yi) \\to (X,x_0) (for i=1,2) of a pointed space (X,x_0) satisfy p1∗(Y1,y1) = p2∗(Y2,y2) iff the pointed covering spaces are isomorphic.      Let X be a PC, LPC, SLSC space. The universal covering space of X is the unique covering space p:X̃ \\to X such that X̃ is SC.      A deck transformation of a covering space p:X̃ \\to X is a homeomorphism f:X̃ \\to X̃ such that p \\circ f = p.      A covering space p:X̃ \\to X is normal if for all y,y' \\in X̃ with p(y) = p(y'), there is a deck transformation f:(X̃,y) \\to (X̃,y').      Let (X,x_0) be a PC, LPC, SLSC space, let G := \\pi_1(X,x_0), and let p: (X̃,x̃_0) \\to (X,x_0) be the SC covering. Let r: (Z,z0) \\to (X,x_0) be any PC covering space. Then:  Galois Correspondence Thm  The maps\\{subgroups H of G\\} ↔\\{isomorphism classes of PC pointed coverings of (X,x_0)\\} defined by H \\to (rH: (X̃\/H,[x̃_0]H) \\to (X,x_0)) and (t: (Y,y_0) \\to (X,x_0)) \\to Im t∗ = t∗(\\pi_1(Y,y_0)) are inverse bijections.   Universal Covering Thm  There is a covering space map q: X̃ \\to Z such that r \\circ q = p.   Action Thm  Let H := r∗(\\pi_1(Z,z0)) and let NG(H) := the normalizer of H in G :=\\{ g \\in G | gHg-1 \\sse H \\}. The group of deck transformations of r: Z \\to X is isomorphic to NG(H)\/H and has a covering space action on Z. Moreover, (H is normal in G) iff (G\/H has a covering space action on Z inducing r) iff (the covering space r:Z \\to X is normal).        A Galois correspondence table has columns for spaces, fundamental groups, and covering space group actions. Each row of contains a space X, \\pi_1(X), and the (deck transformation) group that acts on X with covering space group action (and is maximal with respect to that property). In the column of spaces, a space Y appears in a row above a space X if there is a covering space : Y \\to X.    Examples   "
},
{
  "id": "def-6.80",
  "level": "2",
  "url": "sec-galois-cor.html#def-6.80",
  "type": "Definition",
  "number": "6.3.1",
  "title": "",
  "body": "  An isomorphism of pointed covering spaces pi: (Yi,yi) \\to (X,x_0) for i=1,2 is a homeomorphism f:(Y1,y1) \\to (Y2,y2) such that p2 \\circ f = p1.   "
},
{
  "id": "thm-6.81",
  "level": "2",
  "url": "sec-galois-cor.html#thm-6.81",
  "type": "Theorem",
  "number": "6.3.2",
  "title": "Covering Space Uniqueness Theorem.",
  "body": "Covering Space Uniqueness Theorem   Any two PC, LPC pointed covering spaces pi: (Yi,yi) \\to (X,x_0) (for i=1,2) of a pointed space (X,x_0) satisfy p1∗(Y1,y1) = p2∗(Y2,y2) iff the pointed covering spaces are isomorphic.   "
},
{
  "id": "def-6.82",
  "level": "2",
  "url": "sec-galois-cor.html#def-6.82",
  "type": "Definition",
  "number": "6.3.3",
  "title": "",
  "body": "  Let X be a PC, LPC, SLSC space. The universal covering space of X is the unique covering space p:X̃ \\to X such that X̃ is SC.   "
},
{
  "id": "def-6.85",
  "level": "2",
  "url": "sec-galois-cor.html#def-6.85",
  "type": "Definition",
  "number": "6.3.4",
  "title": "",
  "body": "  A deck transformation of a covering space p:X̃ \\to X is a homeomorphism f:X̃ \\to X̃ such that p \\circ f = p.   "
},
{
  "id": "def-6.86",
  "level": "2",
  "url": "sec-galois-cor.html#def-6.86",
  "type": "Definition",
  "number": "6.3.5",
  "title": "",
  "body": "  A covering space p:X̃ \\to X is normal if for all y,y' \\in X̃ with p(y) = p(y'), there is a deck transformation f:(X̃,y) \\to (X̃,y').   "
},
{
  "id": "thm-6.88",
  "level": "2",
  "url": "sec-galois-cor.html#thm-6.88",
  "type": "Theorem",
  "number": "6.3.6",
  "title": "",
  "body": "  Let (X,x_0) be a PC, LPC, SLSC space, let G := \\pi_1(X,x_0), and let p: (X̃,x̃_0) \\to (X,x_0) be the SC covering. Let r: (Z,z0) \\to (X,x_0) be any PC covering space. Then:  Galois Correspondence Thm  The maps\\{subgroups H of G\\} ↔\\{isomorphism classes of PC pointed coverings of (X,x_0)\\} defined by H \\to (rH: (X̃\/H,[x̃_0]H) \\to (X,x_0)) and (t: (Y,y_0) \\to (X,x_0)) \\to Im t∗ = t∗(\\pi_1(Y,y_0)) are inverse bijections.   Universal Covering Thm  There is a covering space map q: X̃ \\to Z such that r \\circ q = p.   Action Thm  Let H := r∗(\\pi_1(Z,z0)) and let NG(H) := the normalizer of H in G :=\\{ g \\in G | gHg-1 \\sse H \\}. The group of deck transformations of r: Z \\to X is isomorphic to NG(H)\/H and has a covering space action on Z. Moreover, (H is normal in G) iff (G\/H has a covering space action on Z inducing r) iff (the covering space r:Z \\to X is normal).      "
},
{
  "id": "remark-26",
  "level": "2",
  "url": "sec-galois-cor.html#remark-26",
  "type": "Remark",
  "number": "6.3.7",
  "title": "",
  "body": " A Galois correspondence table has columns for spaces, fundamental groups, and covering space group actions. Each row of contains a space X, \\pi_1(X), and the (deck transformation) group that acts on X with covering space group action (and is maximal with respect to that property). In the column of spaces, a space Y appears in a row above a space X if there is a covering space : Y \\to X.  "
},
{
  "id": "example-50",
  "level": "2",
  "url": "sec-galois-cor.html#example-50",
  "type": "Example",
  "number": "6.3.8",
  "title": "",
  "body": " Examples  "
},
{
  "id": "sec-simplicial",
  "level": "1",
  "url": "sec-simplicial.html",
  "type": "Section",
  "number": "7.1",
  "title": "Simplicial Homology",
  "body": "Simplicial Homology  Overview of Homotopy and Homology    Let X be a topological space and x_0 \\in X, and let n \\geq 1 be a natural number. The n-th homotopy group of X at x_0, denoted \\pi n(X,x_0), is the set of homotopy classes of maps (In,Bd\\R^n(In)) \\to (X,x_0) with group operation defined by [f][g] = [f ∗ g] for all [f],[g] \\in \\pi n(X,x_0).      Let X be a space and x_0 \\in X. For all n \\geq 2, the group \\pi n(X,x_0) is abelian.    Motivation: For dimensions n \\geq 2, the group \\pi n(X,x_0) is often difficult to compute. Instead, define abelian groups H_n(X) for all n \\geq 0 that capture much of the same information.  Motivation: Define homology groups 3 ways: simplicial homology Hn\\delta on \\delta -complexes, cellular homology HnCW on CW-complexes, and singular homology Hnsing on topological spaces. \\{\\delta -complexes\\} ⊊\\{CW complexes\\} ⊊\\{topological spaces\\}. Hn\\delta is easiest to compute, HnCW is harder to compute but easier to find the complex structure, and Hnsing is hardest to compute but easiest to use for proving theorems. For a \\delta -complex X, Hn\\delta (X) = HnCW(X) = Hnsing(X). Hn\\delta, HnCW, and Hnsing are all homotopy invariants.   \\delta -Complexes    In \\R^n+1, the i-th standard basis vector is \\varepsilon i(n) := (0,0,\\dots,0,1,0,\\dots,0), where the coordinates are indexed by 0,\\dots,n and the 1 appears in the i-th coordinate.      The standard n-simplex is the subspace of \\R^n+1 (with the Euclidean topology) given by \\delta n :=\\{∑i=0n ti\\varepsilon i(n) | ∑i=0n ti = 1 and 0 \\leq ti \\leq 1 for all i\\}.      The boundary of the standard n-simplex is the subspace ∂\\delta n :=\\{∑i=0n ti\\varepsilon i(n) | ∑i=0n ti = 1, 0 \\leq ti \\leq 1 for all i, and tj = 0 for some j\\}. The open n-simplex is the subspace 0\\delta n := \\delta n - ∂ \\delta n for n \\geq 1, and 0\\delta 0 := \\delta 0.      For 0 \\leq i \\leq n, the i-th face map of the standard n-simplex is the function Fi(n): \\delta n-1 \\into \\delta n defined by Fi(n)(∑i=0n-1 ti\\varepsilon i(n-1)) := ∑j=0i-1 tj\\varepsilon j(n) + ∑j=i+1n tj-1\\varepsilon j(n).      A \\delta -complex is a topological space X constructed inductively by: Let X(0) be a set of points with the discrete topology. Write X(0) = ∐\\alpha \\in J0 \\delta \\alpha 0, where for each \\alpha, \\delta \\alpha 0 \\cong \\delta 0. For each \\alpha \\in J0, let \\sigma ̄\\alpha 0: \\delta \\alpha 0 \\to X(0) be the inclusion map. For each n \\geq 1, form the space X(n) from X(n-1) by: For each \\alpha in an index set Jn, let \\delta \\alpha n be a copy of the standard n-simplex \\delta n, and let s\\alpha : ∂\\delta \\alpha n \\to X(n-1) be a continuous function such that for all 0 \\leq i \\leq n, s\\alpha \\circ Fi(n)|∂\\delta n = \\sigma ̄\\beta n-1 for some \\beta \\in Jn-1. Let Zn := X(n-1) ∐ (∐\\alpha \\in Jn \\delta \\alpha n) have the disjoint union topology, and let \\sim be the minimal equivalence relation on this space such that d \\sim s\\alpha (d) for all d \\in ∂\\delta \\alpha n and \\alpha \\in Jn. Define X(n) be the quotient space and let qn be the quotient map. Define \\sigma ̄\\alpha n: \\delta \\alpha n \\to X(n) to be the composition \\sigma ̄\\alpha n := qn \\circ i\\delta \\alpha nZn where i\\delta \\alpha nZn: \\delta \\alpha n \\to Zn is the inclusion map. Let X := \\cup n \\in \\N X(n) (where each X(n) is identified with its image in X(n+1)). For all n and for all \\alpha \\in Jn, define \\sigma \\alpha n = \\sigma \\alpha : \\delta \\alpha n \\to X by \\sigma \\alpha n := iX(n)X \\circ \\sigma ̄\\alpha n where iX(n)X: X(n) \\to X is the inclusion. A subset A of X is defined to be open in X if and only if (\\sigma \\alpha n)-1(A) is open in \\delta \\alpha n for all n \\geq 0 and all \\alpha \\in Jn. Each \\sigma \\alpha n is called an n-simplex of X.      Every \\delta -complex is a CW complex.      A topological space X has a \\delta -complex structure if and only if there is a collection of continuous maps \\cC =\\{\\sigma \\alpha :\\delta n\\alpha \\to X\\} such that: (1) Each restriction \\sigma \\alpha |(0\\delta n\\alpha ) is an embedding and each point of X is in the image of exactly one \\sigma \\alpha | (0\\delta n\\alpha ). (2) Each \\sigma \\alpha \\circ Fi(n\\alpha ) is a map \\sigma \\beta : \\delta n\\alpha -1 \\to X in \\cC. (3) A subset A of X is open in X if and only if \\sigma \\alpha -1(A) is open in \\delta n\\alpha for all \\sigma \\alpha in \\cC.     Simplicial Homology    Let X be a \\delta -complex and let n \\geq 0. The group of simplicial n-chains of X is Cn\\delta (X) := ⊕\\alpha \\in Jn \\Z = ⊕n-simplices \\sigma \\alpha \\Z \\sigma \\alpha. An element of Cn\\delta (X) is called a (simplicial) n-chain, and written ∑\\alpha \\in Jn m\\alpha \\sigma \\alpha, where each m\\alpha \\in \\Z and all but finitely many m\\alpha's are 0.      Let X be a \\delta -complex and let n \\geq 1. The n-th simplicial boundary map is the group homomorphism ∂n\\delta = ∂n: Cn\\delta (X) \\to Cn-1\\delta (X) defined by ∂n(∑\\alpha \\in Jn m\\alpha \\sigma \\alpha ) := ∑\\alpha \\in Jn m\\alpha ∂n(1\\sigma \\alpha ) and ∂n(1\\sigma \\alpha ) := ∑i=0n (-1)i \\sigma \\alpha \\circ Fi(n). The 0-th simplicial boundary map is the group homomorphism ∂0\\delta = ∂0: C0\\delta (X) \\to 0.      If X is a \\delta -complex and n \\geq 1, then Im ∂n+1\\delta \\sse Ker ∂n\\delta.      Let X be a \\delta -complex and let n \\geq 0. The n-th simplicial homology group of X is the group Hn\\delta (X) := Ker ∂n\\delta \/ Im ∂n+1\\delta.     A quotient of the form \\Z n\/\\Z m is not well-defined. In order to compute this quotient, write the elements of a basis of \\Z m as linear combinations of the elements of a basis of \\Z n: compute the Smith normal form.     Let \\{a1,\\dots,ak\\}, viewed as an ordered list, be a basis for \\Z k. Then each of the following operations creates another basis for this group:   Swap two of the basis elements (ai ↔ aj).    Multiply a basis element by -1 (ai \\to -ai).    Add an integral multiple of one basis element to another (ai \\to ai+maj).        "
},
{
  "id": "def-7.1",
  "level": "2",
  "url": "sec-simplicial.html#def-7.1",
  "type": "Definition",
  "number": "7.1.1",
  "title": "",
  "body": "  Let X be a topological space and x_0 \\in X, and let n \\geq 1 be a natural number. The n-th homotopy group of X at x_0, denoted \\pi n(X,x_0), is the set of homotopy classes of maps (In,Bd\\R^n(In)) \\to (X,x_0) with group operation defined by [f][g] = [f ∗ g] for all [f],[g] \\in \\pi n(X,x_0).   "
},
{
  "id": "thm-7.2",
  "level": "2",
  "url": "sec-simplicial.html#thm-7.2",
  "type": "Theorem",
  "number": "7.1.2",
  "title": "",
  "body": "  Let X be a space and x_0 \\in X. For all n \\geq 2, the group \\pi n(X,x_0) is abelian.   "
},
{
  "id": "def-7.10",
  "level": "2",
  "url": "sec-simplicial.html#def-7.10",
  "type": "Definition",
  "number": "7.1.3",
  "title": "",
  "body": "  In \\R^n+1, the i-th standard basis vector is \\varepsilon i(n) := (0,0,\\dots,0,1,0,\\dots,0), where the coordinates are indexed by 0,\\dots,n and the 1 appears in the i-th coordinate.   "
},
{
  "id": "def-7.11",
  "level": "2",
  "url": "sec-simplicial.html#def-7.11",
  "type": "Definition",
  "number": "7.1.4",
  "title": "",
  "body": "  The standard n-simplex is the subspace of \\R^n+1 (with the Euclidean topology) given by \\delta n :=\\{∑i=0n ti\\varepsilon i(n) | ∑i=0n ti = 1 and 0 \\leq ti \\leq 1 for all i\\}.   "
},
{
  "id": "def-7.12",
  "level": "2",
  "url": "sec-simplicial.html#def-7.12",
  "type": "Definition",
  "number": "7.1.5",
  "title": "",
  "body": "  The boundary of the standard n-simplex is the subspace ∂\\delta n :=\\{∑i=0n ti\\varepsilon i(n) | ∑i=0n ti = 1, 0 \\leq ti \\leq 1 for all i, and tj = 0 for some j\\}. The open n-simplex is the subspace 0\\delta n := \\delta n - ∂ \\delta n for n \\geq 1, and 0\\delta 0 := \\delta 0.   "
},
{
  "id": "def-7.15",
  "level": "2",
  "url": "sec-simplicial.html#def-7.15",
  "type": "Definition",
  "number": "7.1.6",
  "title": "",
  "body": "  For 0 \\leq i \\leq n, the i-th face map of the standard n-simplex is the function Fi(n): \\delta n-1 \\into \\delta n defined by Fi(n)(∑i=0n-1 ti\\varepsilon i(n-1)) := ∑j=0i-1 tj\\varepsilon j(n) + ∑j=i+1n tj-1\\varepsilon j(n).   "
},
{
  "id": "def-7.20",
  "level": "2",
  "url": "sec-simplicial.html#def-7.20",
  "type": "Definition",
  "number": "7.1.7",
  "title": "",
  "body": "  A \\delta -complex is a topological space X constructed inductively by: Let X(0) be a set of points with the discrete topology. Write X(0) = ∐\\alpha \\in J0 \\delta \\alpha 0, where for each \\alpha, \\delta \\alpha 0 \\cong \\delta 0. For each \\alpha \\in J0, let \\sigma ̄\\alpha 0: \\delta \\alpha 0 \\to X(0) be the inclusion map. For each n \\geq 1, form the space X(n) from X(n-1) by: For each \\alpha in an index set Jn, let \\delta \\alpha n be a copy of the standard n-simplex \\delta n, and let s\\alpha : ∂\\delta \\alpha n \\to X(n-1) be a continuous function such that for all 0 \\leq i \\leq n, s\\alpha \\circ Fi(n)|∂\\delta n = \\sigma ̄\\beta n-1 for some \\beta \\in Jn-1. Let Zn := X(n-1) ∐ (∐\\alpha \\in Jn \\delta \\alpha n) have the disjoint union topology, and let \\sim be the minimal equivalence relation on this space such that d \\sim s\\alpha (d) for all d \\in ∂\\delta \\alpha n and \\alpha \\in Jn. Define X(n) be the quotient space and let qn be the quotient map. Define \\sigma ̄\\alpha n: \\delta \\alpha n \\to X(n) to be the composition \\sigma ̄\\alpha n := qn \\circ i\\delta \\alpha nZn where i\\delta \\alpha nZn: \\delta \\alpha n \\to Zn is the inclusion map. Let X := \\cup n \\in \\N X(n) (where each X(n) is identified with its image in X(n+1)). For all n and for all \\alpha \\in Jn, define \\sigma \\alpha n = \\sigma \\alpha : \\delta \\alpha n \\to X by \\sigma \\alpha n := iX(n)X \\circ \\sigma ̄\\alpha n where iX(n)X: X(n) \\to X is the inclusion. A subset A of X is defined to be open in X if and only if (\\sigma \\alpha n)-1(A) is open in \\delta \\alpha n for all n \\geq 0 and all \\alpha \\in Jn. Each \\sigma \\alpha n is called an n-simplex of X.   "
},
{
  "id": "prop-7.22",
  "level": "2",
  "url": "sec-simplicial.html#prop-7.22",
  "type": "Proposition",
  "number": "7.1.8",
  "title": "",
  "body": "  Every \\delta -complex is a CW complex.   "
},
{
  "id": "thm-7.24",
  "level": "2",
  "url": "sec-simplicial.html#thm-7.24",
  "type": "Theorem",
  "number": "7.1.9",
  "title": "",
  "body": "  A topological space X has a \\delta -complex structure if and only if there is a collection of continuous maps \\cC =\\{\\sigma \\alpha :\\delta n\\alpha \\to X\\} such that: (1) Each restriction \\sigma \\alpha |(0\\delta n\\alpha ) is an embedding and each point of X is in the image of exactly one \\sigma \\alpha | (0\\delta n\\alpha ). (2) Each \\sigma \\alpha \\circ Fi(n\\alpha ) is a map \\sigma \\beta : \\delta n\\alpha -1 \\to X in \\cC. (3) A subset A of X is open in X if and only if \\sigma \\alpha -1(A) is open in \\delta n\\alpha for all \\sigma \\alpha in \\cC.   "
},
{
  "id": "def-7.30",
  "level": "2",
  "url": "sec-simplicial.html#def-7.30",
  "type": "Definition",
  "number": "7.1.10",
  "title": "",
  "body": "  Let X be a \\delta -complex and let n \\geq 0. The group of simplicial n-chains of X is Cn\\delta (X) := ⊕\\alpha \\in Jn \\Z = ⊕n-simplices \\sigma \\alpha \\Z \\sigma \\alpha. An element of Cn\\delta (X) is called a (simplicial) n-chain, and written ∑\\alpha \\in Jn m\\alpha \\sigma \\alpha, where each m\\alpha \\in \\Z and all but finitely many m\\alpha's are 0.   "
},
{
  "id": "def-7.32",
  "level": "2",
  "url": "sec-simplicial.html#def-7.32",
  "type": "Definition",
  "number": "7.1.11",
  "title": "",
  "body": "  Let X be a \\delta -complex and let n \\geq 1. The n-th simplicial boundary map is the group homomorphism ∂n\\delta = ∂n: Cn\\delta (X) \\to Cn-1\\delta (X) defined by ∂n(∑\\alpha \\in Jn m\\alpha \\sigma \\alpha ) := ∑\\alpha \\in Jn m\\alpha ∂n(1\\sigma \\alpha ) and ∂n(1\\sigma \\alpha ) := ∑i=0n (-1)i \\sigma \\alpha \\circ Fi(n). The 0-th simplicial boundary map is the group homomorphism ∂0\\delta = ∂0: C0\\delta (X) \\to 0.   "
},
{
  "id": "lem-7.35",
  "level": "2",
  "url": "sec-simplicial.html#lem-7.35",
  "type": "Lemma",
  "number": "7.1.12",
  "title": "",
  "body": "  If X is a \\delta -complex and n \\geq 1, then Im ∂n+1\\delta \\sse Ker ∂n\\delta.   "
},
{
  "id": "def-7.36",
  "level": "2",
  "url": "sec-simplicial.html#def-7.36",
  "type": "Definition",
  "number": "7.1.13",
  "title": "",
  "body": "  Let X be a \\delta -complex and let n \\geq 0. The n-th simplicial homology group of X is the group Hn\\delta (X) := Ker ∂n\\delta \/ Im ∂n+1\\delta.   "
},
{
  "id": "remark-27",
  "level": "2",
  "url": "sec-simplicial.html#remark-27",
  "type": "Remark",
  "number": "7.1.14",
  "title": "",
  "body": " A quotient of the form \\Z n\/\\Z m is not well-defined. In order to compute this quotient, write the elements of a basis of \\Z m as linear combinations of the elements of a basis of \\Z n: compute the Smith normal form.  "
},
{
  "id": "prop-7.40",
  "level": "2",
  "url": "sec-simplicial.html#prop-7.40",
  "type": "Proposition",
  "number": "7.1.15",
  "title": "",
  "body": "  Let \\{a1,\\dots,ak\\}, viewed as an ordered list, be a basis for \\Z k. Then each of the following operations creates another basis for this group:   Swap two of the basis elements (ai ↔ aj).    Multiply a basis element by -1 (ai \\to -ai).    Add an integral multiple of one basis element to another (ai \\to ai+maj).      "
},
{
  "id": "sec-sing-hom",
  "level": "1",
  "url": "sec-sing-hom.html",
  "type": "Section",
  "number": "7.2",
  "title": "Singular Homology",
  "body": "Singular Homology     ...Commutative algebra is a lot like topology, only backwards.   John Baez    Definitions and Induced Homomorphisms    Let X be a topological space. A singular n-simplex of X is a continuous function \\sigma :\\delta n \\to X.      Let X be a topological space and let n \\geq 0. Let Sn be the set of singular n-simplices of X. The group of singular n-chains of X is Cnsing(X) = Cn(X) := ⊕singular n-simplices \\sigma \\Z = ⊕singular n-simplices \\sigma \\Z \\sigma . An element of Cnsing(X) is called a (singular) n-chain, and written ∑singular n-simplices \\sigma m\\sigma \\sigma , where each m\\sigma \\in \\Z and all but finitely many m\\sigma 's are 0.      Let X be a topological space and let n \\geq 1. The n-th singular boundary map is the group homomorphism ∂nsing = ∂nX = ∂n: Cnsing(X) \\to Cn-1sing(X) defined by ∂n(∑singular n-simplices \\sigma m\\sigma \\sigma ) := ∑singular n-simplices \\sigma m\\sigma ∂n(1\\sigma ) and ∂n(1\\sigma ) := ∑i=0n (-1)i \\sigma \\circ Fi(n). The 0-th singular boundary map is the group homomorphism ∂0sing = ∂0: C0sing(X) \\to 0.      If X is a topological space and n \\geq 1, then Im ∂n+1sing \\sse Ker ∂nsing.      Let X be a topological space and let n \\geq 0. The n-th singular homology group of X is the group Hnsing(X) = H_n(X) := Ker ∂nsing \/ Im ∂n+1sing.     Examples     If X is a space with exactly one point, then H_0(X) = \\Z and Hn = 0 for all n \\geq 1.      If a space X has path components X_\\alpha, then Hnsing(X) = ⊕\\alpha Hnsing(X_\\alpha ) for all n \\geq 0.      If X is a path-connected space, then H0sing(X) \\cong \\Z .    Excursion into homological algebra    A chain complex, denoted C•, is a sequence ⋯ \\to Cn+1 \\to Cn \\to Cn-1 \\to ⋯ C0 \\to 0 with group homomorphisms ∂nC = ∂n: Cn \\to Cn-1 and ∂0C = ∂0: C0 \\to 0 satisfying Im ∂n+1 \\sse Ker ∂n for all n. An element of Ker ∂n is called an n-cycle and an element of Im ∂n+1 is an n-boundary. For n \\geq 0, the n-th homology group of C• is H_n(C•) := Ker ∂nC \/ Im ∂n+1C.      A chain map from a chain complex C• to a chain complex D•, written f♯:C• \\to D•, is a collection of group homomorphisms fn♯: Cn \\to Dn for all n \\geq 0 satisfying ∂nD \\circ fn♯ = fn-1♯ \\circ ∂nC for all n.      Let f♯:C• \\to D• be a chain map. The n-th homology homomorphism induced by f♯ is the function fn∗: H_n(C•) \\to H_n(D•) defined by fn∗(γ + Im ∂n+1C) := fn♯(γ) + Im ∂n+1D.      If f♯:C• \\to D• is a chain map, then the n-th homology homomorphism fn∗ induced by f♯ is a well-defined group homomorphism.      Two chain maps f♯,g♯: C• \\to D• are chain homotopic, written f♯ \\simeq g♯, if there is a collection of group homomorphisms hn: Cn \\to Dn+1 satisfying gn - fn = ∂n+1D \\circ hn + hn-1 \\circ ∂nC for all n. The collection of functions\\{hn\\} is called a chain homotopy from f♯ to g♯.      If f♯,g♯: C• \\to D• are chain homotopic chain maps, then fn∗ = gn∗ for all n.      A chain map f♯: C• \\to D• is a chain homotopy equivalence if there is a chain map g♯: D• \\to C• such that f♯ \\circ g♯ \\simeq 1D• and g♯ \\circ f♯ \\simeq 1C•.      If f♯: C• \\to D• is a chain homotopy equivalence, then fn∗: H_n(C•) \\to H_n(D•) is an isomorphism for all n.       If X is a \\delta -complex, then Hn\\delta (X) \\cong Hnsing(X) for all n \\geq 0.      If X is a topological space with two \\delta -complex structures X' and X'', then Hn\\delta (X') \\cong Hn\\delta (X'') for all n \\geq 0.      Let X and Y be topological spaces and let f:X \\to Y be a continuous function, and let n \\geq 0. The n-th homology homomorphism induced by f is the homology homomorphism fn∗: H_n(X) \\to H_n(Y) induced by the (induced) chain map f♯: C•sing(X) \\to C•sing(Y) defined by fn♯(∑singular n-simplices \\sigma of X m\\sigma \\sigma ) := ∑singular n-simplices \\sigma of X m\\sigma f \\circ \\sigma .      If X and Y are topological spaces and f:X \\to Y is a continuous function, then the induced chain map f♯ is a well-defined chain map and hence the induced homology homomorphisms are well-defined homomorphisms.         If f: X \\to Y and g: Y \\to Z are continuous then (g \\circ f)n∗ = gn∗ \\circ fn∗ for all n.    (1X)n∗ = 1H_n(X) for all n.    If f and g are homotopic maps, then fn∗ = gn∗ for all n.         If X and Y are homotopy equivalent spaces (that is, X \\simeq Y), then H_n(X) \\cong H_n(Y) for all n.     Examples     If X is a contractible space, then H_0(X) \\cong \\Z and H_n(X) = 0 for all n \\geq 1.     Decomposing Spaces and Homology Groups  Motivation: Want an SVK theorem for homology  Another excursion into homological algebra:    A sequence of φ:A \\to B, θ:B \\to C of groups and homomorphisms is exact at B if Im φ = Ker θ. A sequence ⋯ Dn+1 \\to Dn \\to ⋯ is exact if it is exact at every group.         A sequence φ:A \\to B, θ:B \\to 0 is exact if and only if φ is onto.    A sequence φ:0 \\to B, θ:B \\to C is exact if and only if θ is one-to-one.    If A \\to B \\to C \\to D \\to E is an exact sequence with homomorphisms φ:A \\to B and ψ:D \\to E satisfying Im φ = B and Ker ψ = 0, then C = 0.        MV = Mayer-Vietoris Theorem   Suppose that X is a topological space with subspaces A,B such that X = Int(A) \\cup Int(B). Then there is an exact sequence ⋯ \\to H_n(A \\cap B) \\to H_n(A) ⊕ H_n(B) \\to H_n(X) \\to Hn-1(A \\cap B) \\to ⋯ \\to H_0(X) \\to 0, such that each homorphism φn: H_n(A \\cap B) \\to H_n(A) ⊕ H_n(B) is given by φn := (iAB n∗,-iBA n∗) and each homomorphism ψn: H_n(A) ⊕ H_n(B) \\to H_n(X) is given by ψn := jA n∗ + jB n∗, where iAB: A \\cap B \\to A, iBA: A \\cap B \\to B, jA: A \\to X, and jB: B \\to X are inclusion maps.     Examples     H_i(Sn) \\cong \\Z for i = 0,n, and H_i(Sn) = 0 for all i \\ne 0,n.    Yet another excursion into homological algebra    A short exact sequence of chain complexes is a sequence 0• \\to A• \\to B• \\to C• \\to 0• of chain complexes and chain maps such that for all n \\geq 0 the sequence 0 \\to An \\to Bn \\to Cn \\to 0 of groups and homomorphisms is exact.    Zig-zag Lemma   If 0• \\to A•, i♯:A• \\to B•, j♯:B• \\to C•, C• \\to 0 is a short exact sequence of chain complexes, then there is a (long) exact sequence ⋯ H_n(A) \\to H_n(B) \\to H_n(C) \\to Hn-1(A) \\to ⋯, with homomorphisms in∗:H_n(A) \\to H_n(B) and jn∗:H_n(B) \\to H_n(C).     Proof of the MV Theorem    Let be a topological space with subspaces such that . The chain complex is defined by: and .      Let be a topological space with subspaces such that . The sequence , with homomorphisms given by given by , is exact.    Small Chains Theorem   Let be a topological space with subspaces such that . Then for all .      "
},
{
  "id": "def-7.50",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.50",
  "type": "Definition",
  "number": "7.2.1",
  "title": "",
  "body": "  Let X be a topological space. A singular n-simplex of X is a continuous function \\sigma :\\delta n \\to X.   "
},
{
  "id": "def-7.51",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.51",
  "type": "Definition",
  "number": "7.2.2",
  "title": "",
  "body": "  Let X be a topological space and let n \\geq 0. Let Sn be the set of singular n-simplices of X. The group of singular n-chains of X is Cnsing(X) = Cn(X) := ⊕singular n-simplices \\sigma \\Z = ⊕singular n-simplices \\sigma \\Z \\sigma . An element of Cnsing(X) is called a (singular) n-chain, and written ∑singular n-simplices \\sigma m\\sigma \\sigma , where each m\\sigma \\in \\Z and all but finitely many m\\sigma 's are 0.   "
},
{
  "id": "def-7.52",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.52",
  "type": "Definition",
  "number": "7.2.3",
  "title": "",
  "body": "  Let X be a topological space and let n \\geq 1. The n-th singular boundary map is the group homomorphism ∂nsing = ∂nX = ∂n: Cnsing(X) \\to Cn-1sing(X) defined by ∂n(∑singular n-simplices \\sigma m\\sigma \\sigma ) := ∑singular n-simplices \\sigma m\\sigma ∂n(1\\sigma ) and ∂n(1\\sigma ) := ∑i=0n (-1)i \\sigma \\circ Fi(n). The 0-th singular boundary map is the group homomorphism ∂0sing = ∂0: C0sing(X) \\to 0.   "
},
{
  "id": "lem-7.55",
  "level": "2",
  "url": "sec-sing-hom.html#lem-7.55",
  "type": "Lemma",
  "number": "7.2.4",
  "title": "",
  "body": "  If X is a topological space and n \\geq 1, then Im ∂n+1sing \\sse Ker ∂nsing.   "
},
{
  "id": "def-7.56",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.56",
  "type": "Definition",
  "number": "7.2.5",
  "title": "",
  "body": "  Let X be a topological space and let n \\geq 0. The n-th singular homology group of X is the group Hnsing(X) = H_n(X) := Ker ∂nsing \/ Im ∂n+1sing.   "
},
{
  "id": "example-51",
  "level": "2",
  "url": "sec-sing-hom.html#example-51",
  "type": "Example",
  "number": "7.2.6",
  "title": "",
  "body": " Examples  "
},
{
  "id": "prop-7.58",
  "level": "2",
  "url": "sec-sing-hom.html#prop-7.58",
  "type": "Proposition",
  "number": "7.2.7",
  "title": "",
  "body": "  If X is a space with exactly one point, then H_0(X) = \\Z and Hn = 0 for all n \\geq 1.   "
},
{
  "id": "thm-7.60",
  "level": "2",
  "url": "sec-sing-hom.html#thm-7.60",
  "type": "Theorem",
  "number": "7.2.8",
  "title": "",
  "body": "  If a space X has path components X_\\alpha, then Hnsing(X) = ⊕\\alpha Hnsing(X_\\alpha ) for all n \\geq 0.   "
},
{
  "id": "thm-7.62",
  "level": "2",
  "url": "sec-sing-hom.html#thm-7.62",
  "type": "Theorem",
  "number": "7.2.9",
  "title": "",
  "body": "  If X is a path-connected space, then H0sing(X) \\cong \\Z .   "
},
{
  "id": "def-7.70",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.70",
  "type": "Definition",
  "number": "7.2.10",
  "title": "",
  "body": "  A chain complex, denoted C•, is a sequence ⋯ \\to Cn+1 \\to Cn \\to Cn-1 \\to ⋯ C0 \\to 0 with group homomorphisms ∂nC = ∂n: Cn \\to Cn-1 and ∂0C = ∂0: C0 \\to 0 satisfying Im ∂n+1 \\sse Ker ∂n for all n. An element of Ker ∂n is called an n-cycle and an element of Im ∂n+1 is an n-boundary. For n \\geq 0, the n-th homology group of C• is H_n(C•) := Ker ∂nC \/ Im ∂n+1C.   "
},
{
  "id": "def-7.72",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.72",
  "type": "Definition",
  "number": "7.2.11",
  "title": "",
  "body": "  A chain map from a chain complex C• to a chain complex D•, written f♯:C• \\to D•, is a collection of group homomorphisms fn♯: Cn \\to Dn for all n \\geq 0 satisfying ∂nD \\circ fn♯ = fn-1♯ \\circ ∂nC for all n.   "
},
{
  "id": "def-7.73",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.73",
  "type": "Definition",
  "number": "7.2.12",
  "title": "",
  "body": "  Let f♯:C• \\to D• be a chain map. The n-th homology homomorphism induced by f♯ is the function fn∗: H_n(C•) \\to H_n(D•) defined by fn∗(γ + Im ∂n+1C) := fn♯(γ) + Im ∂n+1D.   "
},
{
  "id": "lem-7.74",
  "level": "2",
  "url": "sec-sing-hom.html#lem-7.74",
  "type": "Lemma",
  "number": "7.2.13",
  "title": "",
  "body": "  If f♯:C• \\to D• is a chain map, then the n-th homology homomorphism fn∗ induced by f♯ is a well-defined group homomorphism.   "
},
{
  "id": "def-7.77",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.77",
  "type": "Definition",
  "number": "7.2.14",
  "title": "",
  "body": "  Two chain maps f♯,g♯: C• \\to D• are chain homotopic, written f♯ \\simeq g♯, if there is a collection of group homomorphisms hn: Cn \\to Dn+1 satisfying gn - fn = ∂n+1D \\circ hn + hn-1 \\circ ∂nC for all n. The collection of functions\\{hn\\} is called a chain homotopy from f♯ to g♯.   "
},
{
  "id": "prop-7.78",
  "level": "2",
  "url": "sec-sing-hom.html#prop-7.78",
  "type": "Proposition",
  "number": "7.2.15",
  "title": "",
  "body": "  If f♯,g♯: C• \\to D• are chain homotopic chain maps, then fn∗ = gn∗ for all n.   "
},
{
  "id": "def-7.80",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.80",
  "type": "Definition",
  "number": "7.2.16",
  "title": "",
  "body": "  A chain map f♯: C• \\to D• is a chain homotopy equivalence if there is a chain map g♯: D• \\to C• such that f♯ \\circ g♯ \\simeq 1D• and g♯ \\circ f♯ \\simeq 1C•.   "
},
{
  "id": "prop-7.82",
  "level": "2",
  "url": "sec-sing-hom.html#prop-7.82",
  "type": "Proposition",
  "number": "7.2.17",
  "title": "",
  "body": "  If f♯: C• \\to D• is a chain homotopy equivalence, then fn∗: H_n(C•) \\to H_n(D•) is an isomorphism for all n.   "
},
{
  "id": "thm-7.90",
  "level": "2",
  "url": "sec-sing-hom.html#thm-7.90",
  "type": "Theorem",
  "number": "7.2.18",
  "title": "",
  "body": "  If X is a \\delta -complex, then Hn\\delta (X) \\cong Hnsing(X) for all n \\geq 0.   "
},
{
  "id": "cor-7.91",
  "level": "2",
  "url": "sec-sing-hom.html#cor-7.91",
  "type": "Corollary",
  "number": "7.2.19",
  "title": "",
  "body": "  If X is a topological space with two \\delta -complex structures X' and X'', then Hn\\delta (X') \\cong Hn\\delta (X'') for all n \\geq 0.   "
},
{
  "id": "def-7.95",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.95",
  "type": "Definition",
  "number": "7.2.20",
  "title": "",
  "body": "  Let X and Y be topological spaces and let f:X \\to Y be a continuous function, and let n \\geq 0. The n-th homology homomorphism induced by f is the homology homomorphism fn∗: H_n(X) \\to H_n(Y) induced by the (induced) chain map f♯: C•sing(X) \\to C•sing(Y) defined by fn♯(∑singular n-simplices \\sigma of X m\\sigma \\sigma ) := ∑singular n-simplices \\sigma of X m\\sigma f \\circ \\sigma .   "
},
{
  "id": "lem-7.96",
  "level": "2",
  "url": "sec-sing-hom.html#lem-7.96",
  "type": "Lemma",
  "number": "7.2.21",
  "title": "",
  "body": "  If X and Y are topological spaces and f:X \\to Y is a continuous function, then the induced chain map f♯ is a well-defined chain map and hence the induced homology homomorphisms are well-defined homomorphisms.   "
},
{
  "id": "prop-7.97",
  "level": "2",
  "url": "sec-sing-hom.html#prop-7.97",
  "type": "Proposition",
  "number": "7.2.22",
  "title": "",
  "body": "     If f: X \\to Y and g: Y \\to Z are continuous then (g \\circ f)n∗ = gn∗ \\circ fn∗ for all n.    (1X)n∗ = 1H_n(X) for all n.    If f and g are homotopic maps, then fn∗ = gn∗ for all n.      "
},
{
  "id": "thm-7.99",
  "level": "2",
  "url": "sec-sing-hom.html#thm-7.99",
  "type": "Theorem",
  "number": "7.2.23",
  "title": "",
  "body": "  If X and Y are homotopy equivalent spaces (that is, X \\simeq Y), then H_n(X) \\cong H_n(Y) for all n.   "
},
{
  "id": "example-52",
  "level": "2",
  "url": "sec-sing-hom.html#example-52",
  "type": "Example",
  "number": "7.2.24",
  "title": "",
  "body": " Examples  "
},
{
  "id": "cor-7.100",
  "level": "2",
  "url": "sec-sing-hom.html#cor-7.100",
  "type": "Corollary",
  "number": "7.2.25",
  "title": "",
  "body": "  If X is a contractible space, then H_0(X) \\cong \\Z and H_n(X) = 0 for all n \\geq 1.   "
},
{
  "id": "def-7.105",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.105",
  "type": "Definition",
  "number": "7.2.26",
  "title": "",
  "body": "  A sequence of φ:A \\to B, θ:B \\to C of groups and homomorphisms is exact at B if Im φ = Ker θ. A sequence ⋯ Dn+1 \\to Dn \\to ⋯ is exact if it is exact at every group.   "
},
{
  "id": "lem-7.106",
  "level": "2",
  "url": "sec-sing-hom.html#lem-7.106",
  "type": "Lemma",
  "number": "7.2.27",
  "title": "",
  "body": "     A sequence φ:A \\to B, θ:B \\to 0 is exact if and only if φ is onto.    A sequence φ:0 \\to B, θ:B \\to C is exact if and only if θ is one-to-one.    If A \\to B \\to C \\to D \\to E is an exact sequence with homomorphisms φ:A \\to B and ψ:D \\to E satisfying Im φ = B and Ker ψ = 0, then C = 0.      "
},
{
  "id": "thm-7.111",
  "level": "2",
  "url": "sec-sing-hom.html#thm-7.111",
  "type": "Theorem",
  "number": "7.2.28",
  "title": "MV = Mayer-Vietoris Theorem.",
  "body": "MV = Mayer-Vietoris Theorem   Suppose that X is a topological space with subspaces A,B such that X = Int(A) \\cup Int(B). Then there is an exact sequence ⋯ \\to H_n(A \\cap B) \\to H_n(A) ⊕ H_n(B) \\to H_n(X) \\to Hn-1(A \\cap B) \\to ⋯ \\to H_0(X) \\to 0, such that each homorphism φn: H_n(A \\cap B) \\to H_n(A) ⊕ H_n(B) is given by φn := (iAB n∗,-iBA n∗) and each homomorphism ψn: H_n(A) ⊕ H_n(B) \\to H_n(X) is given by ψn := jA n∗ + jB n∗, where iAB: A \\cap B \\to A, iBA: A \\cap B \\to B, jA: A \\to X, and jB: B \\to X are inclusion maps.   "
},
{
  "id": "example-53",
  "level": "2",
  "url": "sec-sing-hom.html#example-53",
  "type": "Example",
  "number": "7.2.29",
  "title": "",
  "body": " Examples  "
},
{
  "id": "prop-7.115",
  "level": "2",
  "url": "sec-sing-hom.html#prop-7.115",
  "type": "Proposition",
  "number": "7.2.30",
  "title": "",
  "body": "  H_i(Sn) \\cong \\Z for i = 0,n, and H_i(Sn) = 0 for all i \\ne 0,n.   "
},
{
  "id": "def-7.120",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.120",
  "type": "Definition",
  "number": "7.2.31",
  "title": "",
  "body": "  A short exact sequence of chain complexes is a sequence 0• \\to A• \\to B• \\to C• \\to 0• of chain complexes and chain maps such that for all n \\geq 0 the sequence 0 \\to An \\to Bn \\to Cn \\to 0 of groups and homomorphisms is exact.   "
},
{
  "id": "thm-7.122",
  "level": "2",
  "url": "sec-sing-hom.html#thm-7.122",
  "type": "Theorem",
  "number": "7.2.32",
  "title": "Zig-zag Lemma.",
  "body": "Zig-zag Lemma   If 0• \\to A•, i♯:A• \\to B•, j♯:B• \\to C•, C• \\to 0 is a short exact sequence of chain complexes, then there is a (long) exact sequence ⋯ H_n(A) \\to H_n(B) \\to H_n(C) \\to Hn-1(A) \\to ⋯, with homomorphisms in∗:H_n(A) \\to H_n(B) and jn∗:H_n(B) \\to H_n(C).   "
},
{
  "id": "def-7.125",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.125",
  "type": "Definition",
  "number": "7.2.33",
  "title": "",
  "body": "  Let be a topological space with subspaces such that . The chain complex is defined by: and .   "
},
{
  "id": "prop-7.127",
  "level": "2",
  "url": "sec-sing-hom.html#prop-7.127",
  "type": "Proposition",
  "number": "7.2.34",
  "title": "",
  "body": "  Let be a topological space with subspaces such that . The sequence , with homomorphisms given by given by , is exact.   "
},
{
  "id": "thm-7.130",
  "level": "2",
  "url": "sec-sing-hom.html#thm-7.130",
  "type": "Theorem",
  "number": "7.2.35",
  "title": "Small Chains Theorem.",
  "body": "Small Chains Theorem   Let be a topological space with subspaces such that . Then for all .   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
